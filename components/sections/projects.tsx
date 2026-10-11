import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import type { ProjectType } from "@/types"

interface ProjectsProps {
  projects: ProjectType[]
  githubProfile?: string
}

export default function Projects({ projects, githubProfile }: ProjectsProps) {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of things I&apos;ve built — from full-stack platforms to machine learning experiments.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {githubProfile && (
          <div className="mt-12 text-center">
            <Link
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Github className="w-4 h-4" /> See more on GitHub
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <article className="reveal group bg-card rounded-lg overflow-hidden border transition-all hover:border-primary/50 hover:shadow-md h-full flex flex-col">
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-muted to-card flex items-center justify-center">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-4xl font-bold text-primary transition-transform group-hover:scale-110" aria-hidden="true">
            {project.initials}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto text-sm">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${project.title} source code on GitHub`}
            >
              <Github className="w-4 h-4" /> Code
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
