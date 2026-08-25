import Section from "../ui/Section";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contacto">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">¿Hablamos?</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded mb-8"></div>
        
        <p className="text-foreground/80 text-lg mb-12">
          Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡no dudes en contactarme!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:contacto@luccamatienzo.com.ar"
            className="w-full sm:w-auto flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group"
          >
            <Mail className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">Enviar Correo</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/lucca-matienzo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 group"
          >
            <FaLinkedin className="group-hover:scale-110 transition-transform" size={24} />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a 
            href="tel:+5491100000000"
            className="w-full sm:w-auto flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 group"
          >
            <Phone className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">Teléfono</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
