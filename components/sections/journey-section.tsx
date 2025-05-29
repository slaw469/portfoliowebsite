"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], ["30px", "0px", "0px", "-30px"]);
  
  const elements = [
    {
      title: "First Steps",
      description: "My journey began with curiosity and the excitement of creating something from nothing. The first lines of code I wrote opened a whole new world of possibilities.",
      delay: 0.1,
    },
    {
      title: "Building Knowledge",
      description: "Through university studies, online courses, and countless hours of practice, I built a foundation of knowledge in software development principles and technologies.",
      delay: 0.2,
    },
    {
      title: "Real-World Challenges",
      description: "Internships and work experiences taught me how to apply my skills to solve real problems. I learned the importance of teamwork, communication, and attention to detail.",
      delay: 0.3,
    },
    {
      title: "Creating Impact",
      description: "Now, I'm focused on creating meaningful impact through my work. Each project is an opportunity to build something valuable and learn something new.",
      delay: 0.4,
    },
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-32 md:py-48 relative bg-gradient-to-b from-secondary/50 to-background overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/255377/pexels-photo-255377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
          opacity: 0.15,
        }}
      />
      
      <div className="container relative z-10 px-4 md:px-8">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            The Story So Far
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Every developer has a unique journey. Here's a glimpse into mine.
          </motion.p>
        </motion.div>
        
        <div className="space-y-32 md:space-y-40">
          {elements.map((element, index) => (
            <JourneyElement
              key={index}
              title={element.title}
              description={element.description}
              index={index}
              delay={element.delay}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyElement({
  title,
  description,
  index,
  delay,
  isInView,
}: {
  title: string;
  description: string;
  index: number;
  delay: number;
  isInView: boolean;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isElementInView = useInView(elementRef, { once: true, amount: 0.5 });
  
  const isEven = index % 2 === 0;
  
  return (
    <div ref={elementRef} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isElementInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.7, delay }}
        className="md:w-1/2"
      >
        <div className={`h-64 md:h-96 bg-card border border-border rounded-lg overflow-hidden relative shadow-md ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span className="text-9xl font-bold text-primary/10">{index + 1}</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isElementInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.7, delay: delay + 0.2 }}
        className="md:w-1/2"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground">{description}</p>
      </motion.div>
    </div>
  );
}