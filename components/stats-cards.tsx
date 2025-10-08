"use client"

import { useEffect, useRef } from "react"

const ITEMS = [
  {
    title: "Projects Completed",
    value: 500,
    suffix: "+",
    trend: "+15% from last year",
    gradient: "from-purple-50 to-white",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
        <path d="M12 22V12"></path>
        <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
        <path d="m7.5 4.27 9 5.15"></path>
      </svg>
    ),
  },
  {
    title: "Years of Experience",
    value: 350,
    suffix: "+",
    trend: "+8% team growth",
    gradient: "from-fuchsia-50 to-white",
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M12 8l-3 9 3-2 3 2-3-9z"></path>
        <path d="M2 9l10-7 10 7v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
      </svg>
    ),
  },
  {
    title: "Client Satisfaction",
    value: 98,
    suffix: "%",
    trend: "+5% improvement",
    gradient: "from-violet-50 to-white",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </svg>
    ),
  },
  {
    title: "Countries Served",
    value: 25,
    suffix: "+",
    trend: "+3 new markets",
    gradient: "from-indigo-50 to-white",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
]

export default function StatsCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const nums = Array.from(el.querySelectorAll<HTMLElement>("[data-count]"))
    const seen = new WeakSet()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            if (seen.has(target)) return
            seen.add(target)
            const end = Number(target.dataset.count || "0")
            const suffix = target.dataset.suffix || ""
            let cur = 0
            const step = Math.max(1, Math.round(end / 60))
            const tick = () => {
              cur += step
              if (cur >= end) {
                target.textContent = `${end}${suffix}`
              } else {
                target.textContent = `${cur}${suffix}`
                requestAnimationFrame(tick)
              }
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    nums.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ITEMS.map((it) => (
        <div
          key={it.title}
          className={`rounded-lg bg-card text-card-foreground relative overflow-hidden border-0 shadow-lg bg-gradient-to-br ${it.gradient} transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/5 to-transparent rounded-bl-full" />
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="tracking-tight text-sm font-medium text-gray-700">{it.title}</div>
            <div className={`p-2 ${it.iconBg} rounded-lg`}>
              <div className={it.iconColor}>{it.icon}</div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-slate-900" data-count={it.value} data-suffix={it.suffix}>
              0
            </div>
            <div className="flex items-center gap-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-green-600"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <p className="text-xs text-green-600 font-medium">{it.trend}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
