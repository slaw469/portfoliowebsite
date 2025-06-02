export type TimelineEvent = {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "education" | "work" | "project" | "learning";
  icon: string;
  details?: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "utd-cs",
    title: "Computer Science Program",
    organization: "University of Texas at Dallas",
    date: "2024 - 2028",
    description: "Pursuing a Bachelor's degree in Computer Science, focusing on software engineering and algorithms.",
    type: "education",
    icon: "graduation-cap",
    details: [
      "Data Structures and Algorithms",
      "Web Development",
      "Database Design",
      "Object-Oriented Programming",
      "Software Engineering Principles"
    ]
  },
  {
    id: "fine-dining-server",
    title: "Fine Dining Server",
    organization: "Fogo de Chao & Pappadeaux Seafood Kitchen",
    date: "2023 - 2025",
    description: "Provided exceptional service at two prestigious restaurants, managing high-volume fine dining experiences.",
    type: "work",
    icon: "utensils",
    details: [
      "Delivered exceptional service in upscale dining environments",
      "Managed multiple tables in high-pressure situations",
      "Expert knowledge of Brazilian steakhouse and seafood cuisine",
      "Consistently maintained high customer satisfaction",
      "Collaborated effectively with kitchen and front-of-house staff"
    ]
  },
  {
    id: "fat-brands-agm",
    title: "Assistant General Manager",
    organization: "Fat Brands",
    date: "2022 - 2023",
    description: "Managed operations for a fast-casual restaurant, overseeing both front and back of house operations.",
    type: "work",
    icon: "briefcase",
    details: [
      "Managed inventory and supply chain operations",
      "Created and optimized staff schedules",
      "Conducted hiring interviews and training programs",
      "Supervised both FOH and BOH operations",
      "Implemented efficiency improvements and cost controls"
    ]
  },
  {
    id: "social-media-entrepreneur",
    title: "Digital Media Entrepreneur",
    organization: "Self-Employed",
    date: "2020 - 2021",
    description: "Built and monetized a successful Instagram brand from scratch, implementing various revenue streams before a profitable exit.",
    type: "work",
    icon: "briefcase",
    details: [
      "Grew Instagram following to over 100K organic followers through strategic content creation",
      "Generated revenue through digital product sales, sponsored posts, and affiliate marketing",
      "Negotiated and managed partnerships with multiple e-commerce brands",
      "Achieved successful exit through $10K+ acquisition by e-commerce company",
      "Developed practical skills in digital marketing, content creation, and business development"
    ]
  },
  {
    id: "ai-infrastructure-sales",
    title: "AI Solutions Architect & Consultant",
    organization: "AI Infrastructure Solutions",
    date: "2024 - Present",
    description: "Working with enterprise clients to implement AI infrastructure solutions while pursuing Computer Science degree, focusing on practical applications of agentic AI systems.",
    type: "work",
    icon: "briefcase",
    details: [
      "Successfully onboarded and supported 3 small business clients with AI infrastructure implementation",
      "Contributed to team achieving 15% efficiency improvements through AI agent deployment",
      "Assisted in developing proof-of-concept AI solutions for client demonstrations",
      "Gained hands-on experience with leading AI infrastructure platforms and tools",
      "Balanced part-time consulting work while maintaining strong academic performance"
    ]
  },
  {
    id: "self-study",
    title: "Self-Study & Online Courses",
    organization: "LeetCode, YouTube, Udemy",
    date: "2020 - Present",
    description: "Continuous learning through online platforms to expand technical knowledge and stay current with industry trends.",
    type: "learning",
    icon: "book",
    details: [
      "Data structures and algorithms practice",
      "Full-stack web development courses",
      "Cloud computing fundamentals",
      "UI/UX design principles"
    ]
  },
  {
    id: "nomad-desk",
    title: "NomadDesk Startup Project",
    organization: "Personal Venture",
    date: "2024 - Present",
    description: "Developed NomadDesk, a platform connecting remote workers with workspaces worldwide, featuring interactive maps and real-time availability tracking.",
    type: "project",
    icon: "laptop-code",
    details: [
      "Built with Next.js, TypeScript, Node.js/Express.js for full-stack implementation",
      "Integrated Google Maps API for interactive workspace search and discovery",
      "Implemented responsive UI with Tailwind CSS and custom components",
      "Created real-time workspace availability system with @tanstack/react-router",
      "Deployed and configured hosting on Vercel with automated CI/CD"
    ]
  }
];