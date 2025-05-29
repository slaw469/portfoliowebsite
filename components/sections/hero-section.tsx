"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for stars background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Star properties
    const stars: { x: number; y: number; radius: number; color: string; velocity: number }[] = [];
    const generateStars = () => {
      stars.length = 0;
      const starCount = Math.floor(canvas.width * canvas.height / 1000);
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5;
        const color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
        const velocity = Math.random() * 0.05 + 0.01;
        
        stars.push({ x, y, radius, color, velocity });
      }
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw each star
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Move star (twinkling effect)
        star.radius += Math.sin(Date.now() * star.velocity) * 0.02;
        
        // Keep radius in bounds
        if (star.radius < 0) star.radius = 0;
        if (star.radius > 2) star.radius = 2;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("resize", generateStars);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Content overlay */}
      <div className="container px-4 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-blue-400 dark:to-purple-400"
          >
            Hi, I'm Steven
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            Software Engineer & Creative Problem Solver
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}