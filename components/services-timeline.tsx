"use client"

import { useEffect, useRef } from "react"
import { BrandCard } from "@/components/brand-card"
import { CraneAnimated } from "@/components/crane-animated"
import { Wrench, Building2, Ruler, Layers, Package, Calculator, Workflow } from "lucide-react"

const itemsLeft = [
  {
    title: "Structural Steel Detailing",
    desc: "Detailing for any scale and complexity with QA-driven workflows.",
    icon: <Wrench size={18} />,
  },
  {
    title: "Misc Steel Detailing",
    desc: "Grating, stairs, handrails, ladders, girts, canopies, gates, and more.",
    icon: <Building2 size={18} />,
  },
  {
    title: "Connection Design",
    desc: "PE-reviewed connection design across multiple regions, delivered on time.",
    icon: <Ruler size={18} />,
  },
  {
    title: "Deck Services",
    desc: "Dedicated deck detailing by an experienced engineering team.",
    icon: <Layers size={18} />,
  },
]

const itemsRight = [
  {
    title: "Material Take Offs",
    desc: "Accurate quantity surveys and materials with traceable outputs.",
    icon: <Package size={18} />,
  },
  {
    title: "Estimation",
    desc: "Fast, precise takeoffs powered by our software toolkit.",
    icon: <Calculator size={18} />,
  },
  {
    title: "BIM Consulting & Coordination",
    desc: "3D model coordination linked to project data for fewer clashes.",
    icon: <Workflow size={18} />,
  },
]

export default function ServicesTimeline() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-in")
        })
      },
      { threshold: 0.2 },
    )
    el.querySelectorAll("[data-anim]").forEach((node) => obs.observe(node))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={root} className="relative mx-auto max-w-7xl py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 text-balance">Services</h2>
      <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-start">
        {/* Left column - BrandCard style */}
        <ul className="grid gap-6">
          {itemsLeft.map((it, i) => (
            <li key={i} data-anim>
              <BrandCard title={it.title} icon={it.icon}>
                {it.desc}
              </BrandCard>
            </li>
          ))}
        </ul>

        {/* Center cranes - animated SVG */}
        <div className="relative hidden md:flex items-start justify-center">
          <CraneAnimated className="max-w-[520px] opacity-80" />
        </div>

        {/* Right column - BrandCard style */}
        <ul className="grid gap-6">
          {itemsRight.map((it, i) => (
            <li key={i} data-anim>
              <BrandCard title={it.title} icon={it.icon}>
                {it.desc}
              </BrandCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
