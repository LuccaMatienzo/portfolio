export const es = {
  nav: {
    about: "sobre mí",
    experience: "experiencia",
    projects: "proyectos",
    stack: "stack",
    contact: "contacto"
  },
  hero: {
    titleName: "Lucca Nicolás Matienzo",
    titleRole: "Computer Engineer | IT Infrastructure & Networking | Full-Stack Developer",
    headlinePart1: "Construyo",
    headlinePart2: "software",
    headlinePart3: "y diseño",
    headlinePart4: "infraestructura IT",
    headlinePart5: "robusta."
  },
  about: {
    sectionTitle: "01 Sobre mí",
    badge: "Abierto a trabajar",
    stats: {
      roleLabel: "Rol Actual",
      roleValue: "Ingeniero de Proyectos e Infraestructura de Redes",
      locationLabel: "Ubicación",
      locationValue: "Tucumán, Argentina",
      experienceLabel: "Experiencia",
      experienceValue: "+1 año profesional",
      educationLabel: "Formación",
      educationValue: "Ing. en Computación (UNT)"
    },
    bio: {
      title: "Soy Lucca Matienzo",
      p1: "Ingeniero en Computación orientado a la resolución de problemas y gestión integral de proyectos. Me motiva explorar continuamente distintas áreas de la tecnología, aprender de cada experiencia y aportar valor en proyectos que representen un verdadero desafío.",
      p2: "<strong class='text-foreground'>Graduado en la </strong> Universidad Nacional de Tucumán. Me esfuerzo por mantenerme continuamente informado y actualizado.",
      p3: "<strong class='text-foreground'>IT Infrastructure & Networking</strong> con experiencia en el diseño, implementación y operación de infraestructura de redes y sistemas, adaptado a entornos profesionales dinámicos y exigentes."
    },
    buttons: {
      downloadCV: "Descargar CV",
      talk: "Hablemos"
    }
  },
  experience: {
    sectionTitle: "02 Experiencia",
    sectionSubtitle: "Trayectoria profesional y roles desempeñados.",
    jobs: [
      {
        id: 1,
        role: "Ingeniero de Proyectos e Infraestructura de Redes",
        company: "SISTELCO S.R.L.",
        dateTag: "Abril 2026 - Actualidad",
        workType: "Presencial",
        description: "Liderazgo y ejecución de proyectos integrales de infraestructura. Diseño de arquitectura de redes, consultoría técnica preventa, elaboración de propuestas técnicas y resolución de incidencias.",
        tags: ["Consultoría Preventa", "TCP/IP", "Fibra Óptica", "CCTV IP", "Telefonía IP", "Gestión de Proyectos", "Gestión de Activos IT"]
      },
      {
        id: 2,
        role: "Técnico en Mesa de Ayuda IT",
        company: "Instituto de Previsión y Seguridad Social de Tucumán",
        dateTag: "Julio 2025 - Junio 2026",
        workType: "Presencial",
        description: "Soporte técnico integral y gestión de incidentes. Administración de identidades y accesos (IAM), uso avanzado de GLPI y capacitación técnica continua a usuarios.",
        tags: ["Gestión de Incidentes", "Soporte Técnico", "IAM", "GLPI", "Comunicación", "Trabajo en Equipo"]
      }
    ]
  },
  projects: {
    sectionTitle: "03 Proyectos",
    sectionSubtitle: "Proyectos en producción y arquitectura de software.",
    list: [
      {
        id: 1,
        title: "Disfraces Ly",
        description: "Plataforma e-commerce completa con sistema de gestión de inventario, pasarela de pagos integrada y panel de administración en tiempo real.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        links: [
          { text: "Ver Tienda", url: "https://disfracesly.com.ar/" },
          { text: "Ver Admin", url: "https://disfracesly.com.ar/admin" }
        ]
      }
    ]
  },
  skills: {
    sectionTitle: "04 Stack",
    sectionSubtitle: "Conocimientos técnicos, herramientas y habilidades de gestión.",
    categories: [
      {
        title: "Frontend",
        skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
      },
      {
        title: "Backend & Infra",
        skills: ["Node.js & Express", "PostgreSQL & Prisma", "Docker & Linux", "Redes TCP/IP", "Cloud Hosting"]
      },
      {
        title: "Herramientas",
        skills: ["Git & GitHub", "GLPI", "VS Code", "Postman", "Figma"]
      }
    ]
  },
  contact: {
    sectionTitle: "05 Contacto",
    sectionSubtitle: "¿Hablamos?",
    text: "Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡no dudes en contactarme!"
  },
  footer: {
    name: "Lucca Nicolás Matienzo",
    role: "IT Infrastructure & Networking.",
    bio: "Diseño arquitecturas, construyo soluciones y me aseguro de que corran bien en producción.",
    madeWith: "Hecho con",
    in: "en Tucumán, Argentina"
  }
};

export type Dictionary = typeof es;
