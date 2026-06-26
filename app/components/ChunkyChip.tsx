"use client";

import { ReactNode } from "react";

interface ChunkyChipProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export function ChunkyChip({ children, selected, onClick }: ChunkyChipProps) {
  return (
    <button
      onClick={onClick}
      style={{ fontFamily: "'Inter', sans-serif" }}
      className={`
        inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm
        border-[3px] transition-all duration-150 cursor-pointer
        ${selected
          ? "bg-coral-light border-coral text-coral shadow-[4px_4px_0_0_#F4837C]"
          : "bg-white border-ink text-ink shadow-[4px_4px_0_0_#2D3250] hover:bg-coral-light hover:border-coral hover:text-coral hover:shadow-[4px_4px_0_0_#F4837C]"
        }
      `}
    >
      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
          ${selected ? "border-coral bg-coral" : "border-ink bg-white"}`}
      >
        {selected && (
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1 4L3 6L7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {children}
    </button>
  );
}
