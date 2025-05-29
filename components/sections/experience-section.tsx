"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timelineEvents } from "@/lib/data/experience-data";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  GraduationCap,
  Book,
  Code,
  Utensils,
  Truck
} from "lucide-react";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "graduation-cap":
        return <GraduationCap className="h-6 w-6" />;
      case "briefcase":
        return <Briefcase className="h-6 w-6" />;
      case "book":
        return <Book className="h-6 w-6" />;
      case "laptop-code":
        return <Code className="h-6 w-6" />;
      case "utensils":
        return <Utensils className="h-6 w-6" />;
      case "truck":
        return <Truck className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "work":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "learning":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border z-0" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative z-10 mb-12 md:mb-16",
                  index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8",
                  "md:w-1/2"
                )}
              >
                <div className="hidden md:block absolute top-6 -mt-1.5 rounded-full border-4 border-background bg-primary h-5 w-5 z-10 transform translate-x-0.5 shadow-sm"
                  style={{ [index % 2 === 0 ? "left" : "right"]: "-12.5px" }}
                />

                <div className="bg-card shadow-sm hover:shadow-md transition-all p-6 md:p-8 rounded-lg border border-border">
                  <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6 gap-3">
                    <div className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-full",
                      getTypeColor(event.type)
                    )}>
                      {getIcon(event.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {event.organization} • {event.date}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4">{event.description}</p>

                  {event.details && event.details.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {event.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4">
                    <span className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs font-medium",
                      getTypeColor(event.type)
                    )}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}