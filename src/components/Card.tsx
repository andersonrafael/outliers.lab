import { type ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl bg-[#0f2137]/80 border border-[#2d3748]/60
        backdrop-blur-sm p-6
        ${hover ? "hover:border-[#00d4ff]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
