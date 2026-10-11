import type React from "react"
import { Button } from "@/components/ui/button"
import { Code, Server, Download } from "lucide-react"

interface AboutProps {
  content: string[]
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">About</span> Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-lg border shadow-sm mb-8">
            {content.map((paragraph, index) => (
              <p key={index} className={`text-lg leading-relaxed text-card-foreground/80 ${index > 0 ? "mt-4" : ""}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SpecialtyCard
              icon={<Server className="w-6 h-6 text-primary" />}
              title="Infrastructure Automation"
              description="Building the systems that keep large-scale cloud infrastructure patched, healthy, and right-sized — safely and without manual toil."
              points={[
                "Patching automation for EC2 infrastructure",
                "Fleet scaling and management at AWS",
                "End-to-end ownership from idea to production",
              ]}
            />

            <SpecialtyCard
              icon={<Code className="w-6 h-6 text-primary" />}
              title="Full-Stack Development"
              description="Designing and shipping user-centric web applications, from responsive frontends to well-documented APIs."
              points={[
                "React, Next.js, Node.js, and Express.js",
                "RESTful APIs and database design",
                "Firebase, Azure, and CI/CD pipelines",
              ]}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
              <a href="/resume.pdf" download="Muano_Masiagwala_Resume.pdf">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SpecialtyCardProps {
  icon: React.ReactNode
  title: string
  description: string
  points: string[]
}

function SpecialtyCard({ icon, title, description, points }: SpecialtyCardProps) {
  return (
    <div className="reveal bg-card p-6 rounded-lg border hover:border-primary/30 transition-all shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-muted rounded-lg">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 text-card-foreground/80">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
