import type React from "react"
import Image from "next/image"
import type { SkillType } from "@/types"

interface SkillsProps {
  rows: SkillType[][]
}

export default function Skills({ rows }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-muted/50 overflow-hidden">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Tech</span> Stack
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Languages, frameworks, and platforms I use to build and run software — from web apps to cloud infrastructure.
        </p>
      </div>

      <div className="space-y-6">
        {rows.map((row, index) => (
          <Marquee key={index} items={row} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function Marquee({ items, reverse = false }: { items: SkillType[]; reverse?: boolean }) {
  return (
    <div
      className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]"
      style={{ "--marquee-duration": `${items.length * 3.5}s` } as React.CSSProperties}
    >
      <div
        className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        <ul className="flex shrink-0 gap-4 pr-4 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-8">
          {items.map((item) => (
            <SkillCard key={item.name} skill={item} />
          ))}
        </ul>
        {/* Duplicate set makes the loop seamless; hidden from assistive tech and when motion is reduced */}
        <ul className="flex shrink-0 gap-4 pr-4 motion-reduce:hidden" aria-hidden="true">
          {items.map((item) => (
            <SkillCard key={item.name} skill={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function SkillCard({ skill }: { skill: SkillType }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 shadow-sm transition-colors hover:border-primary/50">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 p-1.5">
        <Image src={skill.icon} alt="" width={28} height={28} className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col whitespace-nowrap">
        <span className="text-sm font-semibold text-card-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.category}</span>
      </span>
    </li>
  )
}
