export function FlywheelIllustration() {
  return (
    <svg
      viewBox="0 0 320 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Clouds */}
      <g>
        {/* Cloud left */}
        <ellipse cx="42" cy="48" rx="28" ry="18" fill="white" stroke="#2D3250" strokeWidth="3" />
        <ellipse cx="24" cy="52" rx="18" ry="14" fill="white" stroke="#2D3250" strokeWidth="3" />
        <ellipse cx="60" cy="52" rx="16" ry="12" fill="white" stroke="#2D3250" strokeWidth="3" />
        <rect x="18" y="52" width="56" height="14" fill="white" />
        <line x1="18" y1="66" x2="74" y2="66" stroke="#2D3250" strokeWidth="3" />

        {/* Cloud right */}
        <ellipse cx="278" cy="36" rx="22" ry="14" fill="white" stroke="#2D3250" strokeWidth="3" />
        <ellipse cx="262" cy="40" rx="14" ry="11" fill="white" stroke="#2D3250" strokeWidth="3" />
        <ellipse cx="294" cy="40" rx="12" ry="10" fill="white" stroke="#2D3250" strokeWidth="3" />
        <rect x="256" y="40" width="46" height="11" fill="white" />
        <line x1="256" y1="51" x2="302" y2="51" stroke="#2D3250" strokeWidth="3" />
      </g>

      {/* Growth bars — stepping up, smiling face on top */}
      {/* Bar 1 (shortest) */}
      <rect x="40" y="220" width="44" height="48" rx="4" fill="#8FD4F0" stroke="#2D3250" strokeWidth="3" />
      {/* Bar 2 */}
      <rect x="96" y="190" width="44" height="78" rx="4" fill="#3DB4EA" stroke="#2D3250" strokeWidth="3" />
      {/* Bar 3 */}
      <rect x="152" y="152" width="44" height="116" rx="4" fill="#1C9FDB" stroke="#2D3250" strokeWidth="3" />
      {/* Bar 4 (tallest) */}
      <rect x="208" y="108" width="44" height="160" rx="4" fill="#F4837C" stroke="#2D3250" strokeWidth="3" />

      {/* Arrow going up */}
      <path
        d="M262 100 L276 80 L290 100"
        stroke="#4ADE80"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="276" y1="82" x2="276" y2="130" stroke="#4ADE80" strokeWidth="3.5" strokeLinecap="round" />

      {/* Ground line */}
      <line x1="28" y1="268" x2="300" y2="268" stroke="#2D3250" strokeWidth="3" strokeLinecap="round" />

      {/* Smiling face on top of tallest bar */}
      <circle cx="230" cy="88" r="26" fill="#FBBF24" stroke="#2D3250" strokeWidth="3" />
      {/* Eyes */}
      <circle cx="222" cy="84" r="3.5" fill="#2D3250" />
      <circle cx="238" cy="84" r="3.5" fill="#2D3250" />
      {/* Eye shine */}
      <circle cx="223.5" cy="82.5" r="1.2" fill="white" />
      <circle cx="239.5" cy="82.5" r="1.2" fill="white" />
      {/* Smile */}
      <path d="M222 93 Q230 101 238 93" stroke="#2D3250" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <circle cx="218" cy="92" r="4" fill="#F4837C" opacity="0.5" />
      <circle cx="242" cy="92" r="4" fill="#F4837C" opacity="0.5" />

      {/* Coral badge / stamp */}
      <g transform="translate(60, 100)">
        <rect x="0" y="0" width="100" height="40" rx="8" fill="#F4837C" stroke="#2D3250" strokeWidth="3" />
        <text
          x="50"
          y="16"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="white"
          fontFamily="Inter, sans-serif"
          letterSpacing="2"
        >
          GROWTH
        </text>
        <text
          x="50"
          y="30"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="white"
          fontFamily="Inter, sans-serif"
          letterSpacing="2"
        >
          PLAN
        </text>
        {/* Dashed border inside */}
        <rect x="4" y="4" width="92" height="32" rx="5" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" />
      </g>

      {/* Small coin/star sparkles */}
      <circle cx="110" cy="85" r="7" fill="#4ADE80" stroke="#2D3250" strokeWidth="2.5" />
      <text x="110" y="90" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2D3250" fontFamily="Inter, sans-serif">$</text>

      <circle cx="165" cy="120" r="6" fill="#FBBF24" stroke="#2D3250" strokeWidth="2.5" />
      <text x="165" y="125" textAnchor="middle" fontSize="7" fontWeight="700" fill="#2D3250" fontFamily="Inter, sans-serif">$</text>
    </svg>
  );
}
