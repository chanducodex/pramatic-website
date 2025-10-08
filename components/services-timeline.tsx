"use client"

import { useEffect, useRef } from "react"
import { Wrench, Building2, Ruler, Layers, Package, Calculator, Workflow } from "lucide-react"

const itemsLeft = [
  {
    title: "Structural Steel Detailing",
    desc: "Detailing for any scale and complexity with QA-driven workflows.",
    icon: Wrench,
  },
  {
    title: "Misc Steel Detailing",
    desc: "Grating, stairs, handrails, ladders, girts, canopies, gates, and more.",
    icon: Building2,
  },
  {
    title: "Connection Design",
    desc: "PE-reviewed connection design across multiple regions, delivered on time.",
    icon: Ruler,
  },
  {
    title: "Deck Services",
    desc: "Dedicated deck detailing by an experienced engineering team.",
    icon: Layers,
  },
]

const itemsRight = [
  {
    title: "Material Take Offs",
    desc: "Accurate quantity surveys and materials with traceable outputs.",
    icon: Package,
  },
  {
    title: "Estimation",
    desc: "Fast, precise takeoffs powered by our software toolkit.",
    icon: Calculator,
  },
  {
    title: "BIM Consulting & Coordination",
    desc: "3D model coordination linked to project data for fewer clashes.",
    icon: Workflow,
  },
]

const BrandCard = ({ title, icon: Icon, children, index }:any) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-purple-200/60 bg-gradient-to-br from-purple-50 to-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative corner gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-transparent rounded-bl-full" />
      
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 via-purple-100/0 to-purple-200/0 group-hover:from-purple-100/50 group-hover:via-purple-50/30 group-hover:to-transparent transition-all duration-700" />
      
      <div className="relative p-6">
        {/* Header with icon */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-purple-900 group-hover:text-purple-600 transition-colors duration-300 pr-3">
            {title}
          </h3>
          <div className="p-2.5 bg-purple-100 rounded-xl group-hover:bg-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Icon className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {children}
        </p>
        
        {/* Progress bar animation */}
        <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-full transition-all duration-700 shadow-lg shadow-purple-500/50" />
      </div>
    </div>
  )
}

const InnovativeCenterPiece = () => {
  return (
    <div className="relative w-32 h-full min-h-[600px] flex items-center justify-center">
      {/* Vertical gradient line */}
      <div className="absolute inset-x-0 top-0 bottom-0 flex items-center justify-center">
        <div className="w-1 h-full bg-gradient-to-b from-transparent via-purple-300 to-transparent rounded-full" />
      </div>
      
      {/* Animated building structure */}
      <div className="relative z-10">
        <svg width="120" height="600" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Floating geometric shapes representing construction elements */}
          
          {/* Steel beam 1 */}
          <g className="animate-float-1">
            <rect x="20" y="80" width="80" height="12" rx="2" fill="url(#beamGradient1)" opacity="0.9">
              <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
            </rect>
            <circle cx="30" cy="86" r="3" fill="#8B5CF6"/>
            <circle cx="90" cy="86" r="3" fill="#8B5CF6"/>
          </g>
          
          {/* Connection node 1 */}
          <g className="animate-pulse-slow">
            <circle cx="60" cy="120" r="16" fill="url(#nodeGradient1)" opacity="0.3"/>
            <circle cx="60" cy="120" r="10" fill="url(#nodeGradient1)"/>
            <circle cx="60" cy="120" r="4" fill="white"/>
          </g>
          
          {/* Steel beam 2 */}
          <g className="animate-float-2">
            <rect x="30" y="200" width="60" height="10" rx="2" fill="url(#beamGradient2)" opacity="0.9">
              <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite"/>
            </rect>
            <circle cx="38" cy="205" r="2.5" fill="#7C3AED"/>
            <circle cx="82" cy="205" r="2.5" fill="#7C3AED"/>
          </g>
          
          {/* Connection node 2 */}
          <g className="animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
            <circle cx="60" cy="240" r="16" fill="url(#nodeGradient2)" opacity="0.3"/>
            <circle cx="60" cy="240" r="10" fill="url(#nodeGradient2)"/>
            <circle cx="60" cy="240" r="4" fill="white"/>
          </g>
          
          {/* Vertical column */}
          <g className="animate-float-3">
            <rect x="54" y="280" width="12" height="80" rx="2" fill="url(#columnGradient)">
              <animate attributeName="height" values="80;85;80" dur="4s" repeatCount="indefinite"/>
            </rect>
            <circle cx="60" cy="285" r="3" fill="#6D28D9"/>
            <circle cx="60" cy="355" r="3" fill="#6D28D9"/>
          </g>
          
          {/* Connection node 3 */}
          <g className="animate-pulse-slow" style={{ animationDelay: '1s' }}>
            <circle cx="60" cy="380" r="16" fill="url(#nodeGradient3)" opacity="0.3"/>
            <circle cx="60" cy="380" r="10" fill="url(#nodeGradient3)"/>
            <circle cx="60" cy="380" r="4" fill="white"/>
          </g>
          
          {/* Diagonal brace */}
          <g className="animate-float-1" style={{ animationDelay: '0.8s' }}>
            <line x1="30" y1="420" x2="90" y2="470" stroke="url(#braceGradient)" strokeWidth="8" strokeLinecap="round" opacity="0.9">
              <animate attributeName="opacity" values="0.9;1;0.9" dur="3.5s" repeatCount="indefinite"/>
            </line>
            <circle cx="30" cy="420" r="4" fill="#8B5CF6"/>
            <circle cx="90" cy="470" r="4" fill="#8B5CF6"/>
          </g>
          
          {/* Connection node 4 */}
          <g className="animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
            <circle cx="60" cy="500" r="16" fill="url(#nodeGradient4)" opacity="0.3"/>
            <circle cx="60" cy="500" r="10" fill="url(#nodeGradient4)"/>
            <circle cx="60" cy="500" r="4" fill="white"/>
          </g>
          
          {/* Particles floating upward */}
          <circle cx="60" cy="550" r="2" fill="#A78BFA" opacity="0.6">
            <animate attributeName="cy" values="550;50" dur="8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="50" cy="580" r="1.5" fill="#C4B5FD" opacity="0.5">
            <animate attributeName="cy" values="580;80" dur="10s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0" dur="10s" repeatCount="indefinite"/>
          </circle>
          <circle cx="70" cy="570" r="2" fill="#DDD6FE" opacity="0.6">
            <animate attributeName="cy" values="570;70" dur="9s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0" dur="9s" repeatCount="indefinite"/>
          </circle>
          
          <defs>
            <linearGradient id="beamGradient1" x1="20" y1="86" x2="100" y2="86" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="0.5" stopColor="#A78BFA"/>
              <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
            <linearGradient id="beamGradient2" x1="30" y1="205" x2="90" y2="205" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED"/>
              <stop offset="0.5" stopColor="#9333EA"/>
              <stop offset="1" stopColor="#7C3AED"/>
            </linearGradient>
            <linearGradient id="columnGradient" x1="60" y1="280" x2="60" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#6D28D9"/>
            </linearGradient>
            <linearGradient id="braceGradient" x1="30" y1="420" x2="90" y2="470" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA"/>
              <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
            <radialGradient id="nodeGradient1">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#7C3AED"/>
            </radialGradient>
            <radialGradient id="nodeGradient2">
              <stop stopColor="#7C3AED"/>
              <stop offset="1" stopColor="#6D28D9"/>
            </radialGradient>
            <radialGradient id="nodeGradient3">
              <stop stopColor="#9333EA"/>
              <stop offset="1" stopColor="#7C3AED"/>
            </radialGradient>
            <radialGradient id="nodeGradient4">
              <stop stopColor="#A78BFA"/>
              <stop offset="1" stopColor="#8B5CF6"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      {/* Connection lines to cards */}
      <div className="absolute left-0 top-32 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-600 animate-pulse-slow" />
      </div>
      <div className="absolute left-0 top-64 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-600 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute left-0 top-96 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-600 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  )
}

export default function ServicesTimeline() {
  const root = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-in")
        })
      },
      { threshold: 0.2 }
    )
    el?.querySelectorAll("[data-anim]").forEach((node: Element) => obs.observe(node))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={root} className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-16">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold tracking-wide">
            WHAT WE OFFER
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-transparent bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text">Services</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Comprehensive steel detailing and engineering solutions delivered with precision
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative mx-auto mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-start">
        {/* Left column */}
        <ul className="grid gap-6" data-anim>
          {itemsLeft.map((it, i) => (
            <li key={i} data-anim>
              <BrandCard title={it.title} icon={it.icon} index={i}>
                {it.desc}
              </BrandCard>
            </li>
          ))}
        </ul>

        {/* Center innovative structure */}
        <div className="relative hidden md:flex items-start justify-center">
          <InnovativeCenterPiece />
        </div>

        {/* Right column */}
        <ul className="grid gap-6" data-anim>
          {itemsRight.map((it, i) => (
            <li key={i} data-anim>
              <BrandCard title={it.title} icon={it.icon} index={i + itemsLeft.length}>
                {it.desc}
              </BrandCard>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        [data-anim] {
          opacity: 0;
        }

        [data-anim].animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-float-1 {
          animation: float1 4s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float2 3.5s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float3 4.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}