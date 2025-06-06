"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who I Am
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
              >
                <Image
                  src="/images/stevenheadshot.jpeg"
                  alt="Steven profile"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary dark:text-blue-400">
                  My Mission
                </h3>
                <p className="text-lg mb-6 leading-relaxed">
                  I'm a passionate software engineer with a mission to build technology that makes a positive impact. My journey began at UTD in the Computer Science program, where I discovered my love for creating elegant solutions to complex problems.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Beyond coding, I'm driven by the goal of helping my parents retire comfortably and building a sustainable future through technology. This mission shapes how I approach each project – with dedication, attention to detail, and a focus on creating value.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and finding ways to combine creativity with technical excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}