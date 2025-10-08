import { BrandCard } from "@/components/brand-card"
import { Quote, Star } from "lucide-react"

export default function Testimonials() {
  const items = [
    {
      quote:
        "The requirement being an urgent one, the response of Pragmatic team was timely and the product was kept ready ahead of the supply schedule with no compromise in quality.",
      name: "Rupal Kharman",
      company: "Construction Partner",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      quote:
        "The quality of material, regular supply and timely deliveries have been excellent. Doing business with your company has been a true pleasure for us. Looking forward to our continued relationship.",
      name: "Christian Perry",
      company: "Steel Fabricators Inc.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background blobs to match site theme */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-56 h-56 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-fuchsia-500/8 rounded-full blur-3xl" />
      </div>

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 mb-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-purple-900">Client Feedback</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">What Clients Say</h3>
            <p className="mt-1 text-sm text-slate-600">Real feedback from partners and fabricators we've worked with.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <BrandCard key={i} title={t.name} icon={(
              <img src={t.avatar} alt={`${t.name} avatar`} className="w-9 h-9 rounded-full object-cover" />
            )} className="h-full">
              <figure className="flex flex-col h-full">
                <blockquote className="text-slate-700 leading-relaxed italic text-base md:text-lg">“{t.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-600">{t.company}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={14} className="text-yellow-500" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  )
}
