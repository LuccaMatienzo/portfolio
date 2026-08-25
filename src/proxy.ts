import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Lista negra de IPs (ejemplo). En un caso real, esto puede venir de Supabase o Vercel Edge Config.
const BLOCKED_IPS = ["192.168.1.100", "10.0.0.5"];

// Mapa en memoria para Rate Limiting básico (Nota: En Edge Functions reales se suele usar Redis/Vercel KV)
// Para un portfolio, esto es una primera capa de mitigación contra bots simples.
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 100;

export function proxy(request: NextRequest) {
  // Extraemos la IP de los headers ya que request.ip está deprecado en la nueva API
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  // 1. Bloqueo de IPs
  if (BLOCKED_IPS.includes(ip)) {
    return new NextResponse("Access Denied: Your IP is blocked.", { status: 403 });
  }

  // 2. Rate Limiting Básico
  const now = Date.now();
  const userRecord = rateLimitMap.get(ip);

  if (userRecord) {
    if (now - userRecord.timestamp < RATE_LIMIT_WINDOW_MS) {
      userRecord.count += 1;
      if (userRecord.count > MAX_REQUESTS_PER_WINDOW) {
        return new NextResponse("Too Many Requests. Please try again later.", { status: 429 });
      }
    } else {
      // Reiniciar ventana
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
  }

  // 3. Security Headers
  const response = NextResponse.next();

  // Prevenir Clickjacking
  response.headers.set("X-Frame-Options", "DENY");
  // Prevenir MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");
  // Referrer Policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  // Strict Transport Security (HSTS) - Forzar HTTPS
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  return response;
}

// Configurar el matcher para que el proxy aplique solo donde sea necesario
export const config = {
  matcher: [
    /*
     * Aplica a todas las rutas excepto:
     * - api (rutas de API de Next.js)
     * - _next/static (archivos estáticos)
     * - _next/image (optimización de imágenes)
     * - favicon.ico (icono)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
