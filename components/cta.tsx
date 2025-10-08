export default function CTA() {
  return (
    <div id="contact" className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-semibold">Ready to start your project?</h3>
        <p className="mt-2 text-slate-300">Get in touch with our team today.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="mailto:info@pragmatich.com"
            className="group relative inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-5 py-3 text-white font-medium transition-transform hover:translate-y-[-1px]"
          >
            <span className="relative z-10">Request Quote</span>
            <span aria-hidden className="spark-mask" />
          </a>
          <a
            href="tel:+17708090806"
            className="rounded-lg border border-white/30 px-5 py-3 text-white hover:bg-white/10 font-medium"
          >
            Schedule Call
          </a>
          <div className="text-sm text-slate-300">
            <div>
              Email:{" "}
              <a className="underline decoration-white/40 hover:decoration-white" href="mailto:info@pragmatich.com">
                info@pragmatich.com
              </a>
            </div>
            <div>
              Phone:{" "}
              <a className="underline decoration-white/40 hover:decoration-white" href="tel:+17708090806">
                +1 770-809-0806
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* subtle loader/boom micro-lines */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-45 border border-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 -rotate-12 border border-white/10"
        aria-hidden
      />
    </div>
  )
}
