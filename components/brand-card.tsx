import type React from "react"
import { cn } from "@/lib/utils"

type BrandCardProps = {
  title: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export function BrandCard({ title, icon, className, children }: BrandCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-white/60 backdrop-blur",
        "border-violet-200 shadow-sm hover:shadow-lg transition-transform duration-300",
        "hover:-translate-y-1 h-full flex flex-col",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-24 bg-[conic-gradient(at_top_left,_#7C3AED,_#A78BFA_50%,_transparent_60%)] blur-2xl opacity-30" />
      </div>
      <header className="flex items-center gap-3 p-5">
        <div className="grid size-9 place-items-center rounded-md bg-violet-50 text-violet-700 ring-1 ring-violet-200">
          {icon}
        </div>
        <h3 className="text-base md:text-lg font-semibold text-slate-900 text-pretty">{title}</h3>
      </header>
      {children ? <div className="px-5 pb-5 text-slate-600 leading-relaxed flex-1 flex items-start">{children}</div> : null}
    </article>
  )
}
