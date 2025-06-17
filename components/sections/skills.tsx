"use client"

import { useState, useEffect } from "react"

interface SkillsProps {
  skills: string[]
}

export default function Skills({ skills }: SkillsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span> & Technologies
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable software applications.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="bg-card border rounded-lg p-4 text-center hover:border-primary/50 transition-all shadow-sm hover:transform hover:scale-105">
      <span className="text-card-foreground/80 text-sm font-medium">{skill}</span>
    </div>
  )
}
