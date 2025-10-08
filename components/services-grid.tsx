import type React from "react"
export default function ServicesGrid() {
  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Services</h2>
        <p className="text-slate-600 leading-relaxed mt-2">
          We deal with all magnitudes of construction projects—3D modeling using SDS/2 & Tekla for shop drawings,
          comprehensive misc steel solutions, and connection design via global engineering partners.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Structural Steel Detailing"
          desc="3D modeling using SDS/2 & Tekla to deliver complete shop drawings for structural and misc steel."
          icon={
            <svg viewBox="0 0 48 48" className="h-8 w-8 text-[#7C3AED]" fill="currentColor">
              <path d="M6 8h36v6H6zM6 20h36v6H6zM6 32h36v6H6z" />
            </svg>
          }
        />
        <ServiceCard
          title="Misc Steel Solutions"
          desc="Grating, stairs, handrails, ladders, girts, canopies, gates and more—end-to-end detailing."
          icon={
            <svg viewBox="0 0 48 48" className="h-8 w-8 text-[#0EA5A4]" fill="currentColor">
              <path d="M8 8h8v32H8zM32 8h8v32h-8zM20 8h8v32h-8z" />
            </svg>
          }
        />
        <ServiceCard
          title="Connection Design & Engineering"
          desc="Wide range of connection design support through trusted partners for timely, quality delivery."
          icon={
            <svg viewBox="0 0 48 48" className="h-8 w-8 text-[#8B5CF6]" fill="currentColor">
              <path d="M12 24a8 8 0 1116 0 8 8 0 01-16 0zm16 0h8M12 24H4" />
            </svg>
          }
        />
      </div>
    </div>
  )
}

function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white/90 backdrop-blur-lg p-6 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">{icon}</div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>
    </div>
  )
}
