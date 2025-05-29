export type Skill = {
  name: string;
  icon: string;
  level: number; // 1-10
  category: "frontend" | "backend" | "tools" | "soft";
  description: string;
};

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React",
    icon: "react",
    level: 9,
    category: "frontend",
    description: "Building interactive UIs with component-based architecture"
  },
  {
    name: "Next.js",
    icon: "nextjs",
    level: 8,
    category: "frontend",
    description: "Creating SSR, SSG, and hybrid React applications"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    level: 8,
    category: "frontend",
    description: "Developing type-safe applications with enhanced IDE support"
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    level: 9,
    category: "frontend",
    description: "Crafting responsive designs with utility-first approach"
  },
  {
    name: "CSS/SCSS",
    icon: "css",
    level: 8,
    category: "frontend",
    description: "Styling applications with modern CSS techniques"
  },
  {
    name: "HTML",
    icon: "html",
    level: 9,
    category: "frontend",
    description: "Building accessible, semantic markup structures"
  },
  
  // Backend Skills
  {
    name: "Node.js",
    icon: "nodejs",
    level: 8,
    category: "backend",
    description: "Building scalable server-side applications"
  },
  {
    name: "Express",
    icon: "express",
    level: 7,
    category: "backend",
    description: "Creating RESTful APIs and web servers"
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    level: 7,
    category: "backend",
    description: "Designing efficient relational database schemas"
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    level: 6,
    category: "backend",
    description: "Working with NoSQL document databases"
  },
  {
    name: "Python",
    icon: "python",
    level: 7,
    category: "backend",
    description: "Data processing and backend development"
  },
  
  // Tools
  {
    name: "Git",
    icon: "git",
    level: 8,
    category: "tools",
    description: "Version control and collaborative development"
  },
  {
    name: "Docker",
    icon: "docker",
    level: 6,
    category: "tools",
    description: "Containerizing applications for consistent deployment"
  },
  {
    name: "Jest",
    icon: "jest",
    level: 7,
    category: "tools",
    description: "Testing JavaScript applications"
  },
  {
    name: "GitHub Actions",
    icon: "github",
    level: 6,
    category: "tools",
    description: "Setting up CI/CD pipelines"
  },
  
  // Soft Skills
  {
    name: "Problem Solving",
    icon: "problem",
    level: 9,
    category: "soft",
    description: "Breaking down complex issues into manageable pieces"
  },
  {
    name: "Communication",
    icon: "communication",
    level: 8,
    category: "soft",
    description: "Clearly conveying technical concepts to diverse audiences"
  },
  {
    name: "Teamwork",
    icon: "teamwork",
    level: 8,
    category: "soft",
    description: "Collaborating effectively in diverse team settings"
  },
  {
    name: "Time Management",
    icon: "time",
    level: 7,
    category: "soft",
    description: "Prioritizing tasks and meeting deadlines efficiently"
  }
];

export const categories = [
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "tools", name: "Tools" },
  { id: "soft", name: "Soft Skills" }
];