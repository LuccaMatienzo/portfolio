import Section from "../ui/Section";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contacto" title="05 Contacto" subtitle="¿Hablamos?">
      <div className="max-w-4xl mx-auto">
        <p className="text-foreground/80 text-lg mb-12">
          Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡no dudes en contactarme!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="mailto:12matienzo@gmail.com"
            className="flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group"
          >
            <Mail className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">12matienzo@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/lucca-nicol%C3%A1s-matienzo-293682195/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 group"
          >
            <FaLinkedin className="group-hover:scale-110 transition-transform" size={24} />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="tel:+5493814120331"
            className="flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 group"
          >
            <Phone className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">+54 9 3814 12-0331</span>
          </a>

          <a
            href="https://github.com/LuccaMatienzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 glass px-8 py-4 rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
          >
            <FaGithub className="group-hover:scale-110 transition-transform" size={24} />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
