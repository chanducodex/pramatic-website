import { BrandCard } from "./brand-card"
import { ShieldCheck, Clock, Scale, Sparkles } from "lucide-react"

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
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <header className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Choose Us</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <BrandCard key={it.title} title={it.title} icon={it.icon}>
            {it.body}
          </BrandCard>
        ))}
      </div>
    </section>
  )
}
