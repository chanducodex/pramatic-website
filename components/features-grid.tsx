const FEATURES = [
  { t: "On-Time Delivery", d: "Never miss a deadline." },
  { t: "Competitive Pricing", d: "Best value for quality." },
  { t: "Creative & Technical Blend", d: "Innovation meets precision." },
  { t: "Dedicated Team", d: "Experts in their fields." },
  { t: "FTP Server Access", d: "Seamless file sharing." },
  { t: "24/7 Services", d: "Round-the-clock support." },
  { t: "Regular Updates", d: "Stay informed always." },
  { t: "Fast Turnaround", d: "Minimal time, maximum efficiency." },
  { t: "End-to-End Support", d: "Complete project lifecycle." },
  { t: "Resource Selection", d: "Right talent for your needs." },
  { t: "High-Speed Internet", d: "Fast data transfer." },
  { t: "Smooth Execution", d: "Flawless delivery." },
]

export default function FeaturesGrid() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Why Choose Us</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((f) => (
          <div key={f.t} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
            <div className="font-medium text-slate-900">{f.t}</div>
            <p className="text-slate-600 mt-1">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
