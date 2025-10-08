"use client"

import { useRef } from "react"

const BrandCard = ({ title, children, className = "" }:any) => (
  <div 
    className={`bg-white/90 text-slate-900 rounded-xl shadow-sm border border-slate-200 ${className}`}
    role="listitem"
  >
    {children}
  </div>
)

const softwares = [
  { name: "Tekla Structures", src: "https://pragmatich.com/wp-content/uploads/2020/08/tekla.png" },
  { name: "SDS/2", src: "https://pragmatich.com/wp-content/uploads/2020/08/sds-2.png" },
  { name: "AutoCAD", src: "https://pragmatich.com/wp-content/uploads/2020/08/autocad21.png" },
  { name: "Revit", src: "/images/softwares/revit.jpg" },
  { name: "Bluebeam", src: "https://pragmatich.com/wp-content/uploads/2020/08/bluebeam.png" },
  { name: "Navisworks", src: "/images/softwares/navisworks.jpg" },
]

export function SoftwaresSection() {
  const marqueeRef = useRef<HTMLDivElement | null>(null)

  return (
    <section 
      id="software" 
      className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <header className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-4">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-purple-900">Industry Standard Tools</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Software Expertise
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          We deliver with industry-standard tools your team already uses
        </p>
      </header>

      <div className="relative">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              ref={marqueeRef}
              className={`flex gap-6 items-stretch py-4 animate-marquee`}
              role="list"
              aria-label="Supported software logos"
            >
            {softwares.concat(softwares).map((s, i) => (
              <BrandCard 
                key={s.name + i} 
                title={s.name} 
                className="min-w-[240px] hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/60 transition-all duration-300 ease-out group"
              >
                <div className="flex flex-col items-center justify-center py-8 gap-4 px-6 relative">
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-fuchsia-500/0 group-hover:from-purple-500/15 group-hover:to-fuchsia-500/15 rounded-xl transition-all duration-300" />
                  
                  <div className="w-full flex items-center justify-center relative z-10">
                    <img
                      src={s.src || "/placeholder.svg"}
                      alt={`${s.name} logo`}
                      loading="lazy"
                      className="max-h-24 max-w-[180px] object-contain filter brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-300"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement
                        img.src = "/placeholder.svg"
                        img.alt = `${s.name} logo placeholder`
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10 text-base text-slate-900 group-hover:text-purple-800 font-semibold text-center break-words transition-colors duration-300">
                    {s.name}
                  </div>
                </div>
              </BrandCard>
            ))}
          </div>

              {/* Enhanced gradients */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
            </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: 200%;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
            width: auto;
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}