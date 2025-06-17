"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import type { ProjectType } from "@/types"
import { useState, useEffect } from "react"

interface ProjectsProps {
  projects: ProjectType[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Projects</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg overflow-hidden border h-80 animate-pulse">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-6">
                    <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the software projects I've built, showcasing my skills in full-stack development and modern
          web technologies.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Extracted ProjectCard component for reusability
function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <article className="group bg-card rounded-lg overflow-hidden border transition-all hover:border-primary/50 hover:shadow-md h-full flex flex-col">
      <div className="h-48 bg-muted flex items-center justify-center">
        <span className="text-4xl text-primary" aria-hidden="true">
          {project.initials}
        </span>
        <span className="sr-only">{project.title} project</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2 flex-wrap">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-muted transition-colors"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="w-4 h-4 text-primary" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-muted transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="sr-only">Visit</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
