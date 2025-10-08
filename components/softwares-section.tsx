"use client"

import Image from "next/image"
import { BrandCard } from "./brand-card"

const softwares = [
  { name: "Tekla Structures", src: "/images/softwares/tekla.jpg" },
  { name: "SDS/2", src: "/images/softwares/sds2.jpg" },
  { name: "AutoCAD", src: "/images/softwares/autocad.jpg" },
  { name: "Revit", src: "/images/softwares/revit.jpg" },
  { name: "Bluebeam", src: "/images/softwares/bluebeam.jpg" },
  { name: "Navisworks", src: "/images/softwares/navisworks.jpg" },
]

export function SoftwaresSection() {
  return (
    <section id="software" className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-20">
      <header className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Software Expertise</h2>
        <p className="mt-2 text-slate-600">We deliver with industry-standard tools your team already uses.</p>
      </header>

      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-marquee will-change-transform">
          {softwares.concat(softwares).map((s, i) => (
            <BrandCard key={s.name + i} title={s.name} className="min-w-[220px]">
              <div className="flex items-center justify-center py-3">
                <Image
                  src={s.src || "/placeholder.svg"}
                  alt={`${s.name} logo`}
                  width={120}
                  height={40}
                  className="opacity-80"
                />
              </div>
            </BrandCard>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: 200%;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  )
}
