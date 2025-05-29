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
    date: "2019 - 2020",
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
    date: "2021 - 2022",
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
    id: "tech-internship",
    title: "Software Development Intern",
    organization: "Tech Innovations Inc.",
    date: "Summer 2021",
    description: "Developed web applications and assisted with database management for client projects.",
    type: "work",
    icon: "briefcase",
    details: [
      "Front-end development with React",
      "RESTful API integration",
      "Code reviews and testing",
      "Agile development methodology"
    ]
  },
  {
    id: "spark-driver",
    title: "Spark Driver",
    organization: "Flexible Work",
    date: "2021 - 2022",
    description: "Managed flexible delivery work while continuing to build technical skills through self-study.",
    type: "work",
    icon: "truck",
    details: [
      "Time management",
      "Independent problem solving",
      "Route optimization",
      "Customer interaction"
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
    description: "Founded and developed NomadDesk, a platform connecting remote workers with ideal workspaces worldwide.",
    type: "project",
    icon: "laptop-code",
    details: [
      "Full-stack development (Next.js, Node.js, PostgreSQL)",
      "User experience design and implementation",
      "Authentication and payment integration",
      "Deployment and hosting configuration"
    ]
  }
];