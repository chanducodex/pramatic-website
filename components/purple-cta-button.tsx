import type React from "react"
type Props = {
  children: React.ReactNode
  href?: string
}
export default function PurpleCTA({ children, href }: Props) {
  const Tag: any = href ? "a" : "button"
  const extra = href ? { href } : { type: "button" }
  return (
    <Tag
      {...extra}
      className="relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium text-white bg-[var(--brand)] hover:bg-[#6d28d9] transition-colors shadow-sm button-focus"
    >
      <span className="absolute -right-3 -top-2 spark" aria-hidden />
      {children}
    </Tag>
  )
}
