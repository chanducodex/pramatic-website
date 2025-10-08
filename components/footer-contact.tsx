"use client"
import type React from "react"
import { useState } from "react"
import { Linkedin, Twitter, Facebook, Phone, Mail, MapPin } from "lucide-react"

export function FooterContact() {
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = new FormData(e.currentTarget)
    console.log("[v0] contact form:", Object.fromEntries(form.entries()))
    setTimeout(() => setSubmitting(false), 800)
  }

  return (
    <footer id="contact" className="mt-24 border-t bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Need help? Call us!</h3>
          <p className="mt-2 flex items-center gap-2 text-slate-700">
            <Phone className="size-4 text-violet-600" /> +1 770-809-0806
          </p>
          <p className="mt-2 flex items-center gap-2 text-slate-700">
            <MapPin className="size-4 text-violet-600" /> 4080, MCGinnis Ferry Rd Suite #1403, ALPHARETTA, GA 30005,
            USA.
          </p>
          <p className="mt-2 flex items-center gap-2 text-slate-700">
            <Mail className="size-4 text-violet-600" /> info@pragmatich.com
          </p>
          <p className="mt-1 flex items-center gap-2 text-slate-700">
            <Mail className="size-4 text-violet-600" /> sales@pragmatich.com
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              aria-label="LinkedIn"
              href="#"
              className="rounded-md p-2 ring-1 ring-violet-200 hover:bg-violet-50 transition"
            >
              <Linkedin className="size-5 text-violet-700" />
            </a>
            <a
              aria-label="Twitter"
              href="#"
              className="rounded-md p-2 ring-1 ring-violet-200 hover:bg-violet-50 transition"
            >
              <Twitter className="size-5 text-violet-700" />
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="rounded-md p-2 ring-1 ring-violet-200 hover:bg-violet-50 transition"
            >
              <Facebook className="size-5 text-violet-700" />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-violet-200 bg-white/60 p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-slate-900">Contact Us</h4>
          <div className="mt-4 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm text-slate-700">Name</span>
              <input
                name="name"
                required
                placeholder="Your full name"
                className="h-10 rounded-md border px-3 ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 focus-visible:ring-offset-white"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="name@company.com"
                className="h-10 rounded-md border px-3 ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 focus-visible:ring-offset-white"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-slate-700">Message</span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us a bit about your project…"
                className="rounded-md border px-3 py-2 ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 focus-visible:ring-offset-white"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-10 items-center justify-center rounded-md bg-violet-600 px-4 text-white shadow hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 focus-visible:ring-offset-white disabled:opacity-70"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <div className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pragmatic. All rights reserved.
      </div>
    </footer>
  )
}
