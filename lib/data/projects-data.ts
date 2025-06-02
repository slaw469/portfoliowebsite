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
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription: "Interactive weather visualization app with forecast predictions.",
    description: "Weather Dashboard is a responsive web application that provides users with detailed weather information and forecasts for any location worldwide. The dashboard features interactive charts, customizable units, and saved location functionality.",
    thumbnailUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    demoUrl: "https://weather-app.example.com",
    githubUrl: "https://github.com/steven/weather-app",
    technologies: ["React", "Weather API", "Chart.js", "CSS Modules", "LocalStorage"],
    featured: false,
    images: [
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg"
    ],
    challenges: "Creating an intuitive data visualization system for complex weather data while ensuring the application remained responsive across all devices.",
    solutions: "Implemented custom Chart.js configurations with responsive breakpoints and developed a simplified UI that progressively reveals detailed information as needed.",
    outcome: "The Weather Dashboard received positive feedback for its clean design and intuitive interface, with users particularly appreciating the ability to compare forecasts across multiple saved locations."
  },
  {
    id: "task-flow",
    title: "TaskFlow",
    shortDescription: "Productivity app with Kanban boards and time tracking.",
    description: "TaskFlow is a productivity application that combines Kanban-style task management with integrated time tracking features. Users can create boards, customize workflows, set task dependencies, and generate productivity reports.",
    thumbnailUrl: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
    demoUrl: "https://taskflow.example.com",
    githubUrl: "https://github.com/steven/taskflow",
    technologies: ["Vue.js", "Vuex", "Firebase", "Tailwind CSS", "PWA"],
    featured: false,
    images: [
      "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
      "https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg"
    ],
    challenges: "Designing a drag-and-drop interface that was both intuitive and maintained state consistency, while also implementing accurate time tracking across devices.",
    solutions: "Utilized Vue's reactivity system with Vuex for state management, implemented custom drag-and-drop directives, and used Firebase for real-time synchronization across devices.",
    outcome: "TaskFlow has been adopted by several small teams and freelancers, who report an average 15% increase in productivity after implementing the application into their workflows."
  }
];