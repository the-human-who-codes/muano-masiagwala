"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Code, Cloud, Download } from "lucide-react"

interface AboutProps {
  content: string[]
}

export default function About({ content }: AboutProps) {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume.txt"
    link.download = "Muano_Masiagwala_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
              icon={<Code className="w-6 h-6 text-primary" />}
              title="Full-Stack Development"
              description="Experienced in building scalable web applications, user-centric systems, and modern software solutions using cutting-edge frameworks and best practices."
              points={[
                "React, Node.js, and Express.js development",
                "RESTful APIs and database design",
                "Responsive UI/UX implementation",
              ]}
            />

            <SpecialtyCard
              icon={<Cloud className="w-6 h-6 text-primary" />}
              title="Cloud & DevOps"
              description="Skilled in cloud-native applications, CI/CD pipelines, and modern development workflows that ensure scalable and maintainable software systems."
              points={[
                "Firebase and Azure cloud platforms",
                "Git, GitHub Actions, and CI/CD",
                "Agile development methodologies",
              ]}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4" />
              Download Resume
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
    <div className="bg-card p-6 rounded-lg border hover:border-primary/30 transition-all shadow-sm">
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
