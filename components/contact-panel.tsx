import type React from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPanel() {
  return (
    <section className="mx-auto max-w-7xl py-16 md:py-24">
      <div className="grid gap-6 md:grid-cols-3">
        <Card icon={<Phone className="h-5 w-5" />} title="Need help? Call us!" href="tel:+17708090806">
          <p className="text-sm text-white/70">+1 770-809-0806</p>
        </Card>
        <Card icon={<MapPin className="h-5 w-5" />} title="Address">
          <address className="not-italic text-sm text-white/70">
            4080, MCGinnis Ferry Road, Suite #1403,
            <br /> Alpharetta, GA 30005, USA.
          </address>
        </Card>
        <Card icon={<Mail className="h-5 w-5" />} title="Email">
          <ul className="text-sm text-white/70">
            <li>
              <a className="underline hover:text-white" href="mailto:info@pragmatich.com">
                info@pragmatich.com
              </a>
            </li>
            <li>
              <a className="underline hover:text-white" href="mailto:sales@pragmatich.com">
                sales@pragmatich.com
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

function Card({
  icon,
  title,
  href,
  children,
}: {
  icon: React.ReactNode
  title: string
  href?: string
  children: React.ReactNode
}) {
  const Tag: any = href ? "a" : "div"
  const extra = href ? { href } : {}
  return (
    <Tag
      {...extra}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10 focus:outline-none button-focus"
    >
      <div className="absolute right-4 top-4 spark" aria-hidden></div>
      <div className="flex items-center gap-3 text-white">
        <div className="grid place-items-center h-10 w-10 rounded-lg bg-[var(--brand)]/20">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-3">{children}</div>
    </Tag>
  )
}
