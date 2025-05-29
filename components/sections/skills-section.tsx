"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { skills, categories, type Skill } from "@/lib/data/skills-data";
import { cn } from "@/lib/utils";
import {
  Laptop,
  Server,
  Wrench,
  Users,
  Code,
  Database,
  Terminal,
  Coffee,
  Lightbulb,
  MessageSquare,
  Clock,
  Github
} from "lucide-react";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const filteredSkills = skills.filter((skill) => skill.category === selectedCategory);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "react":
      case "nextjs":
      case "typescript":
      case "html":
      case "css":
      case "tailwind":
        return <Code />;
      case "nodejs":
      case "express":
      case "postgresql":
      case "mongodb":
      case "python":
        return <Database />;
      case "git":
      case "docker":
      case "jest":
      case "github":
        return <Terminal />;
      case "problem":
        return <Lightbulb />;
      case "communication":
        return <MessageSquare />;
      case "teamwork":
        return <Users />;
      case "time":
        return <Clock />;
      default:
        return <Coffee />;
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Laptop className="h-5 w-5 mr-2" />;
      case "backend":
        return <Server className="h-5 w-5 mr-2" />;
      case "tools":
        return <Wrench className="h-5 w-5 mr-2" />;
      case "soft":
        return <Users className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My Skills
          </h2>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-full transition-all",
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  )}
                >
                  {getCategoryIcon(category.id)}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                isInView={isInView}
                icon={getIconComponent(skill.icon)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  isInView,
  icon,
}: {
  skill: Skill;
  index: number;
  isInView: boolean;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-border"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{skill.name}</h3>
      </div>
      
      <p className="text-muted-foreground mb-4">{skill.description}</p>
      
      <div className="mt-2">
        <div className="flex justify-between mb-1 text-sm">
          <span>Proficiency</span>
          <span>{skill.level}/10</span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level * 10}%` } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}