"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data/projects-data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Github, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents different challenges 
            and learning opportunities in my journey as a developer.
          </p>

          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-20"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="mb-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-3">
                        Featured Project
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {project.shortDescription}
                      </p>
                    </div>

                    <p className="mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-3">
                      <Button
                        onClick={() => handleOpenProject(project)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        View Details
                      </Button>
                      {project.githubUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow cursor-pointer group" onClick={() => handleOpenProject(project)}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenProject(project);
                      }}
                      className="w-full"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={handleCloseProject}>
        <DialogContent className="max-w-4xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseProject}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription>
              {selectedProject?.shortDescription}
            </DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <div className="mt-4 space-y-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProject.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Challenges</h4>
                    <p className="text-sm">{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Solutions</h4>
                    <p className="text-sm">{selectedProject.solutions}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Outcome</h4>
                    <p className="text-sm">{selectedProject.outcome}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.githubUrl && (
                    <Button asChild>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" /> View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.demoUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}