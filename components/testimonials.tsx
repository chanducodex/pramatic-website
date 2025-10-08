import { BrandCard } from "@/components/brand-card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const items = [
    {
      quote:
        "The requirement being an urgent one, the response of Pragmatic team was timely and the product was kept ready ahead of the supply schedule with no compromise in quality.",
      name: "Rupal Kharman",
      company: "Construction Partner",
    },
    {
      quote:
        "The quality of material, regular supply and timely deliveries have been excellent. Doing business with your company has been a true pleasure for us. Looking forward to our continued relationship.",
      name: "Christian Perry",
      company: "Steel Fabricators Inc.",
    },
  ]
  return (
    <div className="space-y-8">
      <h3 className="text-xl md:text-2xl font-semibold text-slate-900">What Clients Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <BrandCard key={i} title={t.name} icon={<Quote size={18} />} className="h-full">
            <p className="text-slate-700 leading-relaxed">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-slate-600">{t.company}</footer>
          </BrandCard>
        ))}
      </div>
    </div>
  )
}
