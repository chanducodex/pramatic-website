"use client"
import type React from "react"
import { useState } from "react"
import { Linkedin, Twitter, Facebook, Phone, Mail, MapPin, Check } from "lucide-react"

export function FooterContact() {
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // simple honeypot check
    const formEl = e.currentTarget
    const honey = (formEl.querySelector('input[name="company"]') as HTMLInputElement | null)?.value
    if (honey) return // silent bot drop

    setSubmitting(true)
    setSent(false)
    const form = new FormData(formEl)
    console.log("[v0] contact form:", Object.fromEntries(form.entries()))
    // simulate network request
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
      formEl.reset()
    }, 900)
  }

  return (
  <footer id="contact" className="relative mt-24 border-t bg-white/70 backdrop-blur overflow-x-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-16 top-8 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute -right-16 bottom-8 w-72 h-72 bg-fuchsia-500/8 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Need help? Call us!</h3>
          <p className="mt-2 flex items-center gap-2 text-slate-700">
            <Phone className="size-4 text-violet-600" />
            <a href="tel:+17708090806" className="hover:underline">+1 770-809-0806</a>
          </p>
          <p className="mt-2 flex items-center gap-2 text-slate-700">
            <MapPin className="size-4 text-violet-600" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=4080+McGinnis+Ferry+Rd+Alpharetta+GA+30005"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              4080, McGinnis Ferry Rd Suite #1403, Alpharetta, GA 30005, USA
            </a>
          </p>
          <p className="mt-2 flex items-center gap-2 text-slate-700">
            <Mail className="size-4 text-violet-600" />
            <a href="mailto:info@pragmatich.com" className="hover:underline">info@pragmatich.com</a>
          </p>
          <p className="mt-1 flex items-center gap-2 text-slate-700">
            <Mail className="size-4 text-violet-600" />
            <a href="mailto:sales@pragmatich.com" className="hover:underline">sales@pragmatich.com</a>
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
              className="rounded-md p-2 ring-1 ring-violet-200 hover:bg-violet-50 transition"
            >
              <Linkedin className="size-5 text-violet-700" />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com/"
              className="rounded-md p-2 ring-1 ring-violet-200 hover:bg-violet-50 transition"
            >
              <Twitter className="size-5 text-violet-700" />
            </a>
            <a
              aria-label="Facebook"
              href="https://facebook.com/"
              className="rounded-md p-2 ring-1 ring-violet-200 hover:bg-violet-50 transition"
            >
              <Facebook className="size-5 text-violet-700" />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-violet-200 bg-white/60 p-6 shadow-sm" aria-describedby="contact-help">
          <h4 className="text-lg font-semibold text-slate-900">Contact Us</h4>
          <p id="contact-help" className="text-xs text-slate-600 mt-1">We typically respond within 24 hours. We respect your privacy.</p>
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
            {/* honeypot field to deter bots (kept visually hidden) */}
            <input name="company" type="text" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px]" aria-hidden="true" />
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
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending…
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {/* success message */}
            {sent ? (
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-green-700">
                <Check className="size-4 text-green-700" />
                Message sent — we'll be in touch shortly.
              </div>
            ) : null}
          </div>
        </form>
      </div>
      <div className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pragmatic. All rights reserved.
      </div>
    </footer>
  )
}
