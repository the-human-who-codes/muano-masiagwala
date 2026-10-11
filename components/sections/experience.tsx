import type { ExperienceType } from "@/types"
import { Award, Briefcase, ExternalLink, GraduationCap } from "lucide-react"

interface ExperienceProps {
  experience: ExperienceType[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Experience</span> & Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From Computer Science at Wits to building infrastructure automation at AWS.
        </p>

        <ol className="relative max-w-3xl mx-auto border-l border-border ml-3 md:mx-auto">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} current={index === 0 && item.end === "Present"} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function TimelineItem({ item, current }: { item: ExperienceType; current: boolean }) {
  const Icon = item.type === "education" ? GraduationCap : Briefcase

  return (
    <li className="mb-10 ml-8 last:mb-0">
      <span
        className={`absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full border bg-card ${
          current ? "border-primary ring-4 ring-primary/20" : ""
        }`}
      >
        <Icon className="h-4 w-4 text-primary" />
      </span>

      <div className="reveal bg-card p-6 rounded-lg border hover:border-primary/30 transition-all shadow-sm">
        <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
          <h3 className="text-lg font-bold">{item.role}</h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">
            {item.start} – {item.end}
          </span>
        </div>
        <p className="text-primary mb-3">{item.organization}</p>
        <p className="text-muted-foreground mb-4">{item.summary}</p>
        <ul className="space-y-2 text-card-foreground/80 mb-4">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>

        {item.credential && (
          <a
            href={item.credential.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 p-3 transition-colors hover:bg-primary/10"
            aria-label={`View credential: ${item.credential.title}`}
          >
            <Award className="h-5 w-5 shrink-0 text-primary" />
            <span className="flex-1">
              <span className="block text-sm font-semibold">{item.credential.title}</span>
              <span className="block text-xs text-muted-foreground">
                {item.credential.issuer} · Earned {item.credential.date}
              </span>
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
          </a>
        )}

        <div className="flex gap-2 flex-wrap">
          {item.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}
