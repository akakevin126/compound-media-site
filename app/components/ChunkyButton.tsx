"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ChunkyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "coral" | "white";
  size?: "sm" | "md" | "lg";
}

export function ChunkyButton({
  children,
  variant = "coral",
  size = "md",
  className = "",
  disabled,
  ...props
}: ChunkyButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const variantClasses = {
    coral: "bg-coral text-white hover:bg-coral-hover",
    white: "bg-white text-ink hover:bg-coral-light",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest
        border-[3px] border-ink rounded-full
        transition-all duration-150 cursor-pointer
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled
          ? "opacity-50 cursor-not-allowed shadow-[6px_6px_0_0_#2D3250]"
          : "shadow-[6px_6px_0_0_#2D3250] hover:shadow-[3px_3px_0_0_#2D3250] hover:translate-x-[3px] hover:translate-y-[3px]"
        }
        ${className}
      `}
      disabled={disabled}
      style={{ fontFamily: "'Inter', sans-serif" }}
      {...props}
    >
      {children}
    </button>
  );
}
