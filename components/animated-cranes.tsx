import Image from "next/image"

export default function AnimatedCranes() {
  return (
    <div className="relative mx-auto max-w-7xl">
      {/* Backdrop hero illustration */}
      <Image
        src="/images/hero-crane.jpg"
        alt="Cranes and steel skyline illustration"
        width={2400}
        height={1200}
        priority
        className="w-full h-64 md:h-96 object-cover rounded-xl opacity-90"
      />
      {/* Overlay: two cranes with subtle motion */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-2">
        <div className="relative">
          <Image
            src="/images/cranes.png"
            alt="Tower crane silhouette"
            width={1200}
            height={1200}
            className="absolute -bottom-8 left-6 w-44 md:w-64 opacity-70"
            style={{ animation: "sway 10s ease-in-out infinite" }}
          />
          <div
            aria-hidden
            className="absolute left-20 md:left-28 top-6 h-24 w-px bg-white/50"
            style={{ animation: "hook-bob 3.2s ease-in-out infinite" }}
          />
        </div>
        <div className="relative">
          <Image
            src="/images/cranes.png"
            alt="Tower crane silhouette"
            width={1200}
            height={1200}
            className="absolute -bottom-10 right-6 w-44 md:w-64 opacity-70 scale-x-[-1]"
            style={{ animation: "sway 9s ease-in-out infinite" }}
          />
          <div
            aria-hidden
            className="absolute right-20 md:right-28 top-10 h-28 w-px bg-white/50"
            style={{ animation: "hook-bob 3.6s ease-in-out infinite" }}
          />
        </div>
      </div>
      {/* Weld sparks near headline area */}
      <div className="absolute inset-x-0 top-6 flex justify-center gap-10">
        <span aria-hidden className="spark" />
        <span aria-hidden className="spark" />
        <span aria-hidden className="spark" />
      </div>
    </div>
  )
}
