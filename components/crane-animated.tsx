"use client"

type CraneAnimatedProps = {
  className?: string
  decorative?: boolean
}

export function CraneAnimated({ className = "w-full h-auto", decorative = true }: CraneAnimatedProps) {
  return (
    <div aria-hidden={decorative} className={className}>
      {/* Using the provided SVG and keeping CSS in a styled-jsx block to scope animations */}
      <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Left Crane */}
        <g className="float-sway">
          <rect x="140" y="465" width="60" height="15" fill="url(#gradient1)" />
          <polygon points="150,465 190,465 185,455 155,455" fill="url(#gradient2)" />
          <rect x="145" y="445" width="50" height="10" fill="#6D28D9" opacity="0.8" />
          <rect x="164" y="80" width="12" height="365" fill="url(#gradient2)" />
          <rect x="166" y="80" width="8" height="365" fill="#7C3AED" opacity="0.4" />
          <line x1="164" y1="100" x2="176" y2="120" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="176" y1="100" x2="164" y2="120" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="164" y1="150" x2="176" y2="170" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="176" y1="150" x2="164" y2="170" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="164" y1="200" x2="176" y2="220" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="176" y1="200" x2="164" y2="220" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />

          <rect x="162" y="70" width="16" height="12" fill="#8B5CF6" opacity="0.9" />
          <rect x="164" y="72" width="12" height="8" fill="#A78BFA" opacity="0.5" />

          <rect x="40" y="68" width="230" height="6" fill="url(#gradient1)" />
          <rect x="42" y="70" width="226" height="2" fill="#6D28D9" opacity="0.5" />

          <rect x="176" y="68" width="70" height="6" fill="url(#gradient1)" opacity="0.8" />
          <rect x="235" y="60" width="14" height="14" fill="#6D28D9" />
          <rect x="237" y="62" width="10" height="10" fill="#8B5CF6" />

          <rect x="95" y="65" width="6" height="3" fill="#8B5CF6" />

          <line x1="98" y1="68" x2="98" y2="140" stroke="#8B5CF6" strokeWidth="2.5" className="cable-lift" />
          <g className="cable-lift">
            <rect x="93" y="140" width="10" height="12" fill="#7C3AED" />
            <rect x="95" y="142" width="6" height="8" fill="#8B5CF6" />
          </g>

          <line x1="170" y1="68" x2="40" y2="71" stroke="#A78BFA" strokeWidth="1" opacity="0.7" strokeDasharray="2,2" />
          <line
            x1="170"
            y1="68"
            x2="270"
            y2="71"
            stroke="#A78BFA"
            strokeWidth="1"
            opacity="0.7"
            strokeDasharray="2,2"
          />
        </g>

        {/* Right Crane mirrored */}
        <g className="float-sway delay" transform="translate(400, 0) scale(-1, 1)">
          <rect x="140" y="465" width="60" height="15" fill="url(#gradient1)" />
          <polygon points="150,465 190,465 185,455 155,455" fill="url(#gradient2)" />
          <rect x="145" y="445" width="50" height="10" fill="#6D28D9" opacity="0.8" />
          <rect x="164" y="100" width="12" height="345" fill="url(#gradient2)" />
          <rect x="166" y="100" width="8" height="345" fill="#7C3AED" opacity="0.4" />
          <line x1="164" y1="120" x2="176" y2="140" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="176" y1="120" x2="164" y2="140" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="164" y1="170" x2="176" y2="190" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="176" y1="170" x2="164" y2="190" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="164" y1="220" x2="176" y2="240" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <line x1="176" y1="220" x2="164" y2="240" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />

          <rect x="162" y="90" width="16" height="12" fill="#8B5CF6" opacity="0.9" />
          <rect x="164" y="92" width="12" height="8" fill="#A78BFA" opacity="0.5" />

          <rect x="40" y="88" width="230" height="6" fill="url(#gradient1)" />
          <rect x="42" y="90" width="226" height="2" fill="#6D28D9" opacity="0.5" />

          <rect x="176" y="88" width="70" height="6" fill="url(#gradient1)" opacity="0.8" />

          <rect x="235" y="80" width="14" height="14" fill="#6D28D9" />
          <rect x="237" y="82" width="10" height="10" fill="#8B5CF6" />

          <rect x="120" y="85" width="6" height="3" fill="#8B5CF6" />

          <line x1="123" y1="88" x2="123" y2="180" stroke="#8B5CF6" strokeWidth="2.5" className="cable-lift delayed" />
          <g className="cable-lift delayed">
            <rect x="118" y="180" width="10" height="12" fill="#7C3AED" />
            <rect x="120" y="182" width="6" height="8" fill="#8B5CF6" />
          </g>

          <line x1="170" y1="88" x2="40" y2="91" stroke="#A78BFA" strokeWidth="1" opacity="0.7" strokeDasharray="2,2" />
          <line
            x1="170"
            y1="88"
            x2="270"
            y2="91"
            stroke="#A78BFA"
            strokeWidth="1"
            opacity="0.7"
            strokeDasharray="2,2"
          />
        </g>

        {/* Background grid */}
        <g opacity="0.08">
          <line x1="0" y1="150" x2="800" y2="150" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="8,8" />
          <line x1="0" y1="250" x2="800" y2="250" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="8,8" />
          <line x1="0" y1="350" x2="800" y2="350" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="8,8" />
          <line x1="200" y1="0" x2="200" y2="500" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="8,8" />
          <line x1="400" y1="0" x2="400" y2="500" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="8,8" />
          <line x1="600" y1="0" x2="600" y2="500" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="8,8" />
        </g>

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes cableLift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-0.6deg); }
        }
        .float-sway { transform-origin: 50% 0%; animation: sway 8s ease-in-out infinite; }
        .float-sway.delay { animation-delay: 2s; }
        .cable-lift { animation: cableLift 4s ease-in-out infinite; }
        .cable-lift.delayed { animation-delay: 2s; }
      `}</style>
    </div>
  )
}
