export function CoinCluster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stack of coins */}
      {/* Shadow stack */}
      <ellipse cx="44" cy="66" rx="22" ry="8" fill="#2D3250" opacity="0.25" />

      {/* Coin 3 (back) */}
      <ellipse cx="44" cy="54" rx="22" ry="8" fill="#D4A017" stroke="#2D3250" strokeWidth="2.5" />
      <ellipse cx="44" cy="50" rx="22" ry="8" fill="#FBBF24" stroke="#2D3250" strokeWidth="2.5" />

      {/* Coin 2 */}
      <ellipse cx="44" cy="44" rx="22" ry="8" fill="#D4A017" stroke="#2D3250" strokeWidth="2.5" />
      <ellipse cx="44" cy="40" rx="22" ry="8" fill="#FBBF24" stroke="#2D3250" strokeWidth="2.5" />

      {/* Coin 1 (front) */}
      <ellipse cx="44" cy="34" rx="22" ry="8" fill="#D4A017" stroke="#2D3250" strokeWidth="2.5" />
      <ellipse cx="44" cy="30" rx="22" ry="8" fill="#FBBF24" stroke="#2D3250" strokeWidth="2.5" />
      <text x="44" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2D3250" fontFamily="Inter, sans-serif">$</text>

      {/* Floating coin */}
      <circle cx="93" cy="28" r="18" fill="#4ADE80" stroke="#2D3250" strokeWidth="2.5" />
      <circle cx="93" cy="28" r="12" fill="#4ADE80" stroke="#2D3250" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="93" y="33" textAnchor="middle" fontSize="14" fontWeight="700" fill="#2D3250" fontFamily="Inter, sans-serif">$</text>

      {/* Sparkle star */}
      <path d="M15 20 L17 14 L19 20 L25 22 L19 24 L17 30 L15 24 L9 22 Z" fill="#F4837C" stroke="#2D3250" strokeWidth="1.5" />
    </svg>
  );
}

export function SmallCoin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="17" fill="#4ADE80" stroke="#2D3250" strokeWidth="3" />
      <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="700" fill="#2D3250" fontFamily="Inter, sans-serif">$</text>
    </svg>
  );
}
