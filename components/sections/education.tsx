import type { EducationType } from "@/types"
import { Calendar, Award, ExternalLink } from "lucide-react"
import Link from "next/link"

interface EducationProps {
  education: EducationType[]
  certifications: EducationType[]
}

export default function Education({ education, certifications }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span> & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="text-primary" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" /> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((item) => (
                <CertificationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationCard({ item }: { item: EducationType }) {
  return (
    <div className="reveal bg-card p-6 rounded-lg border hover:border-primary/30 transition-all shadow-sm">
      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
        <h4 className="text-lg font-bold">{item.title}</h4>
        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">{item.date}</span>
      </div>
      <p className="text-primary mb-2">{item.institution}</p>
      {item.description && <p className="text-muted-foreground">{item.description}</p>}
    </div>
  )
}

function CertificationCard({ item }: { item: EducationType }) {
  return (
    <div className="reveal bg-card p-6 rounded-lg border hover:border-primary/30 transition-all shadow-sm">
      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
        <h4 className="text-lg font-bold">{item.title}</h4>
        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">{item.date}</span>
      </div>
      <p className="text-primary mb-2">{item.institution}</p>
      {item.description && <p className="text-muted-foreground mb-2">{item.description}</p>}
      {item.link && (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
        >
          {item.linkLabel ?? "View Credential"} <ExternalLink className="h-3 w-3" />
        </Link>
      )}
    </div>
  )
}
