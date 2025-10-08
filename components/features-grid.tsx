import { 
  Clock, 
  DollarSign, 
  Lightbulb, 
  Users, 
  Server, 
  Headphones, 
  Bell, 
  Zap, 
  Target, 
  UserCheck, 
  Wifi, 
  CheckCircle 
} from "lucide-react"

const FEATURES = [
  { t: "On-Time Delivery", d: "Never miss a deadline.", icon: <Clock size={16} /> },
  { t: "Competitive Pricing", d: "Best value for quality.", icon: <DollarSign size={16} /> },
  { t: "Creative & Technical Blend", d: "Innovation meets precision.", icon: <Lightbulb size={16} /> },
  { t: "Dedicated Team", d: "Experts in their fields.", icon: <Users size={16} /> },
  { t: "FTP Server Access", d: "Seamless file sharing.", icon: <Server size={16} /> },
  { t: "24/7 Services", d: "Round-the-clock support.", icon: <Headphones size={16} /> },
  { t: "Regular Updates", d: "Stay informed always.", icon: <Bell size={16} /> },
  { t: "Fast Turnaround", d: "Minimal time, maximum efficiency.", icon: <Zap size={16} /> },
  { t: "End-to-End Support", d: "Complete project lifecycle.", icon: <Target size={16} /> },
  { t: "Resource Selection", d: "Right talent for your needs.", icon: <UserCheck size={16} /> },
  { t: "High-Speed Internet", d: "Fast data transfer.", icon: <Wifi size={16} /> },
  { t: "Smooth Execution", d: "Flawless delivery.", icon: <CheckCircle size={16} /> },
]

export default function FeaturesGrid() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements to match surrounding sections */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg md:text-xl font-semibold text-slate-800 text-center">Additional Benefits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((f, index) => (
          <div 
            key={f.t} 
            className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100 transition-colors duration-300">
                {f.icon}
              </div>
              <div className="font-semibold text-slate-900 group-hover:text-purple-700 transition-colors duration-300 flex-1">{f.t}</div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed flex-1">{f.d}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
