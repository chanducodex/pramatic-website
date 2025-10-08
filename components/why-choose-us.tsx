import { BrandCard } from "./brand-card"
import { ShieldCheck, Clock, Scale, Sparkles } from "lucide-react"
import FeaturesGrid from "./features-grid"

const items = [
  {
    title: "Quality & Accuracy",
    icon: <ShieldCheck size={18} />,
    body: "Rigorous QA, clash checks, and code-compliance baked in.",
  },
  {
    title: "Speed at Scale",
    icon: <Clock size={18} />,
    body: "Parallelized workflows and automation for tight deadlines.",
  },
  {
    title: "Cost & Constructability",
    icon: <Scale size={18} />,
    body: "Optimized details that reduce rework and RFIs in the field.",
  },
  {
    title: "Innovation-Ready",
    icon: <Sparkles size={18} />,
    body: "Modern BIM, review tooling, and smooth GC/Sub collaboration.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-24 overflow-hidden">
      {/* Decorative background elements similar to Software Expertise */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="space-y-12">
        <header className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-purple-900">Our Competitive Edge</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Expertise, speed, and constructability — delivered with quality and modern tooling for your structural steel projects.
          </p>
        </header>

        {/* Main highlight cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, index) => (
            <div
              key={it.title}
              className="transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BrandCard title={it.title} icon={it.icon}>
                {it.body}
              </BrandCard>
            </div>
          ))}
        </div>

        {/* Additional features section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl opacity-50" />
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <FeaturesGrid />
          </div>
        </div>
      </div>
    </section>
  )
}
