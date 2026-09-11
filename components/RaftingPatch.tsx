export function RaftingPatch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label="Cub Scout rafting patch: a den-made embroidered badge with a raft, paddle, and river"
      className={className}
    >
      <defs>
        <radialGradient id="felt" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#2d6f88" />
          <stop offset="70%" stopColor="#1a4d63" />
          <stop offset="100%" stopColor="#123544" />
        </radialGradient>
        <filter id="stitch" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.2" />
        </filter>
      </defs>
      <circle cx="120" cy="120" r="116" fill="#0f2a36" />
      <circle
        cx="120"
        cy="120"
        r="108"
        fill="none"
        stroke="#e3b23c"
        strokeWidth="10"
      />
      <circle
        cx="120"
        cy="120"
        r="100"
        fill="none"
        stroke="#f4e6c8"
        strokeWidth="3"
        strokeDasharray="3 5"
      />
      <circle cx="120" cy="120" r="94" fill="url(#felt)" filter="url(#stitch)" />
      <path
        d="M42 118c18 10 36 10 54 0s36-10 54 0 36 10 48 2"
        fill="none"
        stroke="#8fd4e8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M48 132c16 8 32 8 48 0s32-8 48 0 28 8 42 2"
        fill="none"
        stroke="#c9eef7"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
      <ellipse cx="120" cy="146" rx="46" ry="16" fill="#3aa0c8" />
      <ellipse cx="120" cy="140" rx="44" ry="13" fill="#59b7d8" />
      <path
        d="M82 140c8-14 20-22 38-22s30 8 38 22"
        fill="#ef6c2f"
        stroke="#1b2430"
        strokeWidth="1.5"
      />
      <circle cx="102" cy="136" r="4" fill="#f4e6c8" />
      <circle cx="120" cy="134" r="4" fill="#f4e6c8" />
      <circle cx="138" cy="136" r="4" fill="#f4e6c8" />
      <rect
        x="154"
        y="86"
        width="7"
        height="62"
        rx="3"
        transform="rotate(28 157 117)"
        fill="#e3b23c"
      />
      <rect
        x="148"
        y="78"
        width="20"
        height="12"
        rx="2"
        transform="rotate(28 158 84)"
        fill="#f4e6c8"
      />
      <text
        x="120"
        y="64"
        textAnchor="middle"
        fill="#f4e6c8"
        fontSize="13"
        fontWeight="700"
        letterSpacing="2.4"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        CUB SCOUT
      </text>
      <text
        x="120"
        y="188"
        textAnchor="middle"
        fill="#e3b23c"
        fontSize="16"
        fontWeight="800"
        letterSpacing="1.6"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        RAFTING
      </text>
      <text
        x="120"
        y="206"
        textAnchor="middle"
        fill="#f4e6c8"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2.8"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        PATCH
      </text>
    </svg>
  );
}
