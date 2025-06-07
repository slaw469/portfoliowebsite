export type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnailUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured: boolean;
  images: string[];
  challenges: string;
  solutions: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "nomad-desk",
    title: "NomadDesk",
    shortDescription: "A platform connecting remote workers with ideal workspaces worldwide.",
    description: "NomadDesk is a comprehensive platform that connects digital nomads and remote workers with workspaces that match their preferences, budget, and location needs. The application features an interactive map interface, detailed workspace profiles, booking capabilities, and community reviews.",
    thumbnailUrl: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    demoUrl: "https://nomad-desk-ochre.vercel.app/",
    githubUrl: "https://github.com/slaw469/Nomad-Desk",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "Google Maps API", "Tailwind CSS", "@tanstack/react-router"],
    featured: true,
    images: [
      "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg",
      "https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg",
      "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg"
    ],
    challenges: "Building NomadDesk presented several key challenges: implementing real-time workspace availability tracking, creating an intuitive map-based search interface, managing group bookings and coordination, building a responsive and intuitive UI, and handling user authentication and authorization securely.",
    solutions: "I implemented custom components for map integration using Google Maps API, created a responsive design with Tailwind CSS, set up real-time updates through a well-structured Express.js backend, and developed comprehensive error handling and user feedback systems. The application uses TypeScript throughout to ensure type safety and maintainability.",
    outcome: "NomadDesk successfully launched as a fully functional platform for connecting remote workers with workspaces. The application features a modern, responsive UI, real-time availability updates, and an intuitive booking system. The project demonstrates strong full-stack development capabilities and attention to user experience."
  },
  {
    id: "ultradian",
    title: "Ultradian",
    shortDescription: "Personal deep work timing coach that aligns productivity with natural energy rhythms.",
    description: "Ultradian is a sophisticated productivity assistant that helps users optimize their workday by aligning tasks with their body's natural energy rhythms. The app generates personalized focus schedules, integrates with calendars, and includes a Chrome extension for AI-powered work tracking and analysis.",
    thumbnailUrl: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    demoUrl: "https://ultradian.vercel.app/",
    githubUrl: "https://github.com/slaw469/Ultradian",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "tRPC", "NextAuth.js", "Tailwind CSS", "Zustand", "TanStack Query", "Chrome Extensions API", "Framer Motion"],
    featured: false,
    images: [
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      "https://images.pexels.com/photos/159832/clock-time-hour-minute-159832.jpeg"
    ],
    challenges: "Creating Ultradian involved complex challenges: developing algorithms to analyze and predict personal energy patterns, integrating with external APIs (Google Calendar), building a Chrome extension that seamlessly communicates with the web app, implementing real-time schedule adjustments based on user feedback, and creating an intuitive UI that visualizes complex productivity data.",
    solutions: "I implemented a sophisticated data analysis system using TypeScript and PostgreSQL to track energy patterns over time. Built with Next.js 14 App Router for optimal performance, used tRPC for type-safe APIs, and created a Chrome extension that uses AI to generate work summaries. The app features real-time state management with Zustand and smooth animations with Framer Motion to enhance user experience.",
    outcome: "Ultradian represents a comprehensive productivity solution that successfully combines cutting-edge web technologies with practical biohacking principles. The application demonstrates advanced full-stack development skills, including real-time data processing, external API integrations, browser extension development, and complex state management. The project showcases expertise in modern web development patterns and user-centered design."
  },
  {
    id: "ai-time-doubler",
    title: "AI Time Doubler",
    shortDescription: "Productivity browser extension that eliminates context-switching time with AI-powered session summaries.",
    description: "AI Time Doubler is a sophisticated productivity tool that combines a browser extension with a web dashboard to eliminate the time lost when returning to work. It automatically tracks your work sessions, generates AI-powered summaries of what you were working on, and suggests next steps to help you instantly regain momentum.",
    thumbnailUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    demoUrl: "https://ai-time-doubler.vercel.app",
    githubUrl: "https://github.com/slaw469/AI-Time-Doubler",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Chrome Extensions API", "OpenAI API", "JavaScript"],
    featured: false,
    images: [
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg"
    ],
    challenges: "Building AI Time Doubler required solving complex technical challenges: developing a browser extension that intelligently tracks user context across tabs and applications, implementing real-time AI summarization using OpenAI's API while managing rate limits and costs, creating seamless communication between the browser extension and web dashboard, and designing algorithms to detect meaningful work patterns and suggest relevant next steps.",
    solutions: "I implemented a modern solution using React with TypeScript for type safety and Vite for fast development builds. The browser extension uses Chrome's API to track tab activity and capture work context, while the web dashboard provides AI-powered session summaries through OpenAI integration. Tailwind CSS and shadcn/ui components ensure a clean, responsive interface with excellent user experience.",
    outcome: "AI Time Doubler successfully reduces context-switching time to under 30 seconds, demonstrating advanced skills in browser extension development, AI integration, and modern React architecture. The project showcases expertise in TypeScript, modern build tools (Vite), and API integrations. The application provides significant productivity improvements for developers, students, and knowledge workers who frequently switch between multiple projects and tasks."
  }
];