export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#140B2C] via-[#2E1065] to-[#0B061A] text-white">
      {/* Decorative cranes backdrop */}
      <img
        src="/images/cranes.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-40px] mx-auto w-[900px] opacity-15 select-none"
      />
      {/* Subtle illustration for visual interest on large screens */}
      <img
        src="/images/generated-hero-illustration.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 bottom-0 hidden md:block w-[520px] opacity-20 select-none"
      />
      {/* Additional tiny sparks near headline for micro-interaction */}
      <div className="absolute left-8 top-10 hidden md:flex gap-4" aria-hidden="true">
        <span className="spark" />
        <span className="spark" />
        <span className="spark" />
      </div>
      {/* Suspended beam animation */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 hidden md:block" aria-hidden="true">
        <div className="origin-top animate-sway">
          {/* Beam color to purple accent */}
          <div className="mx-auto h-2 w-36 rounded bg-[#8B5CF6]" />
          <div className="mx-auto h-24 w-[2px] bg-white/30" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl space-y-6">
          <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide">
            Precision in Every Detail
          </p>
          <h1 className="text-pretty text-4xl md:text-5xl font-semibold">
            Transform your structural vision into reality
          </h1>
          <p className="text-slate-200/90 leading-relaxed">
            Leading Structural Steel Detailing and Engineering company with over <strong>350+ years</strong> of combined
            experience. Experts in AISC, CISC, NISD, AWS, OSHA and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-5 py-3 text-white font-medium transition-transform hover:translate-y-[-1px]"
            >
              <span className="relative z-10">Get Started</span>
              <span aria-hidden className="spark-mask" />
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-white/30 px-5 py-3 text-white hover:bg-white/10 font-medium"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
