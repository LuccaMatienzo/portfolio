import Section from "../ui/Section";
import Image from "next/image";

export default function About() {
  return (
    <Section id="sobre-mi" className="bg-surface/50">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Elementos decorativos */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 transform transition-transform hover:rotate-12 duration-300"></div>
            <div className="absolute inset-0 bg-background border border-primary/30 rounded-2xl flex items-center justify-center overflow-hidden glass">
              {/* Aquí irá la imagen de Supabase, temporalmente un placeholder */}
              <div className="w-full h-full bg-surface flex flex-col items-center justify-center text-foreground/40">
                <span className="mb-2">Espacio para Foto</span>
                <span className="text-xs">(Cargada desde Supabase)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre Mí</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          
          <p className="text-foreground/80 leading-relaxed text-lg">
            Soy un ingeniero en computación apasionado por el desarrollo web full stack. Con experiencia construyendo proyectos desde cero hasta su despliegue en producción.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Me especializo en crear arquitecturas escalables, seguras y modulares utilizando Next.js, React, TypeScript y PostgreSQL. Mi enfoque siempre está en las buenas prácticas, asegurando código limpio y optimizado.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Valoro la seguridad y el rendimiento, implementando medidas contra vulnerabilidades comunes y ataques, y garantizando interfaces que se adaptan fluidamente a cualquier dispositivo y tema visual.
          </p>
        </div>
      </div>
    </Section>
  );
}
