"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header
      className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-white/90"}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Pragmatic Technical Services logo" className="h-8 w-auto" />
          <span className="sr-only">Pragmatic Technical Services</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <li>
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-slate-900">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-3 py-2 text-sm font-medium text-white transition-transform hover:translate-y-[-1px]"
        >
          <span className="relative z-10">Request Quote</span>
          <span aria-hidden className="spark-mask" />
        </a>
      </nav>
    </header>
  )
}
