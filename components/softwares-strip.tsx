export default function SoftwaresStrip() {
  const logos = [
    { alt: "SDS/2", src: "https://pragmatich.com/wp-content/uploads/2020/08/sds-2.png" },
    { alt: "Bluebeam", src: "https://pragmatich.com/wp-content/uploads/2020/08/bluebeam.png" },
    { alt: "Tekla", src: "https://pragmatich.com/wp-content/uploads/2020/08/tekla.png" },
    { alt: "AutoCAD", src: "https://pragmatich.com/wp-content/uploads/2020/08/autocad21.png" },
  ]
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-16">
      <h2 className="text-center text-white text-2xl md:text-3xl font-semibold">Softwares</h2>
      <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <div
          className="flex gap-12 py-6 px-6 whitespace-nowrap will-change-transform"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[...logos, ...logos].map((l, i) => (
            <img key={i} src={l.src || "/placeholder.svg"} alt={l.alt} className="h-14 w-auto opacity-90" />
          ))}
        </div>
      </div>
    </section>
  )
}
