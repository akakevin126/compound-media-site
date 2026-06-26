import { ReactNode } from "react";

interface ChunkyCardProps {
  children: ReactNode;
  className?: string;
}

export function ChunkyCard({ children, className = "" }: ChunkyCardProps) {
  return (
    <div
      className={`bg-white border-[3px] border-ink rounded-card shadow-chunky-lg ${className}`}
    >
      {children}
    </div>
  );
}
