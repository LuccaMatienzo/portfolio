import { Dictionary } from "./es";

export const en: Dictionary = {
  nav: {
    about: "about me",
    experience: "experience",
    projects: "projects",
    stack: "stack",
    contact: "contact"
  },
  hero: {
    titleName: "Lucca Nicolás Matienzo",
    titleRole: "Computer Engineer | IT Infrastructure & Networking | Full-Stack Developer",
    headlinePart1: "I build",
    headlinePart2: "software",
    headlinePart3: "and design",
    headlinePart4: "robust",
    headlinePart5: "IT infrastructure.",
    description: "Computer Engineer. I develop end-to-end web applications with React, Next.js and relational databases — and I also design, implement and operate the infrastructure where they run.",
    buttons: {
      workTogether: "Let's work together",
      viewExperience: "View my experience",
      downloadCV: "Download CV"
    },
    stats: [
      {
        value: "1+",
        label: "years in production environments"
      },
      {
        value: "4+",
        label: "projects delivered"
      },
      {
        value: "ES / EN",
        label: "bilingual · remote work"
      }
    ]
  },
  about: {
    sectionTitle: "03 About me",
    badge: "Open to work",
    stats: {
      roleLabel: "Current Role",
      roleValue: "Project Engineer & Network Infrastructure",
      locationLabel: "Location",
      locationValue: "Tucumán, Argentina",
      experienceLabel: "Experience",
      experienceValue: "+1 year professional",
      educationLabel: "Education",
      educationValue: "Computer Eng. (UNT)"
    },
    bio: {
      title: "I'm Lucca Matienzo",
      p1: "Computer Engineer focused on problem-solving and comprehensive project management. I am motivated by continuously exploring different areas of technology, learning from every experience, and adding value to projects that represent a true challenge.",
      p2: "<strong class='text-foreground'>Graduated from </strong> the National University of Tucumán. I strive to stay continuously informed and updated.",
      p3: "<strong class='text-foreground'>IT Infrastructure & Networking</strong> with experience in designing, implementing, and operating network and system infrastructure, adapted to dynamic and demanding professional environments."
    },
    buttons: {
      downloadCV: "Download CV",
      talk: "Let's talk"
    }
  },
  experience: {
    sectionTitle: "01 Experience",
    sectionSubtitle: "Professional career and roles performed.",
    jobs: [
      {
        id: 1,
        role: "Project Engineer & Network Infrastructure",
        company: "SISTELCO S.R.L.",
        dateTag: "April 2026 - Present",
        workType: "On-site",
        description: "Leadership and execution of comprehensive infrastructure projects. Network architecture design, pre-sales technical consulting, preparation of technical proposals, and incident resolution.",
        tags: ["Pre-sales Consulting", "TCP/IP", "Fiber Optics", "IP CCTV", "IP Telephony", "Project Mgmt", "IT Asset Mgmt"]
      },
      {
        id: 2,
        role: "IT Help Desk Technician",
        company: "Institute of Social Security of Tucumán",
        dateTag: "July 2025 - June 2026",
        workType: "On-site",
        description: "Comprehensive technical support and incident management. Identity and access management (IAM), advanced use of GLPI, and continuous technical training for users.",
        tags: ["Incident Mgmt", "Technical Support", "IAM", "GLPI", "Communication", "Teamwork"]
      }
    ]
  },
  projects: {
    sectionTitle: "02 Projects",
    sectionSubtitle: "Production projects and software architecture.",
    list: [
      {
        id: 1,
        title: "Disfraces Ly",
        description: "Complete e-commerce platform with inventory management system, integrated payment gateway, and real-time administration panel.",
        image: "/disfracesly.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        links: [
          { text: "View Store", url: "https://disfracesly.com.ar/" },
          { text: "View Admin", url: "https://disfracesly.com.ar/admin" }
        ]
      }
    ]
  },
  skills: {
    sectionTitle: "04 Stack",
    sectionSubtitle: "Technical knowledge, tools, and management skills.",
    categories: [
      {
        title: "Frontend",
        skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
      },
      {
        title: "Backend & Infra",
        skills: ["Node.js & Express", "PostgreSQL & Prisma", "Docker & Linux", "TCP/IP Networks", "Cloud Hosting"]
      },
      {
        title: "Tools",
        skills: ["Git & GitHub", "GLPI", "VS Code", "Postman", "Figma"]
      }
    ]
  },
  contact: {
    sectionTitle: "05 Contact",
    sectionSubtitle: "Let's talk?",
    text: "I am currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, feel free to contact me!"
  },
  footer: {
    name: "Lucca Nicolás Matienzo",
    role: "IT Infrastructure & Networking.",
    bio: "I design architectures, build solutions, and ensure they run smoothly in production.",
    madeWith: "Made with",
    in: "in Tucumán, Argentina"
  }
};
