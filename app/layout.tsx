import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

import { Plus_Jakarta_Sans as V0_Font_Plus_Jakarta_Sans, IBM_Plex_Mono as V0_Font_IBM_Plex_Mono, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _plusJakartaSans = V0_Font_Plus_Jakarta_Sans({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800"] })
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

export const metadata: Metadata = {
  title: 'Pragmatic — Structural Steel Detailing & BIM Services',
  description:
    'Pragmatic delivers precision structural steel detailing, fabrication coordination, and advanced BIM services using industry-standard tools and modern workflows.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />

        {/* Chatling AI chatbot configuration and loader */}
        <Script
          id="chtl-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: `window.chtlConfig = { chatbotId: "9418221527" }` }}
        />
        <Script
          id="chtl-script"
          strategy="afterInteractive"
          src="https://chatling.ai/js/embed.js"
          data-id="9418221527"
        />
      </body>
    </html>
  )
}
