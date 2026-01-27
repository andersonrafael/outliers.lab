import { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const variants = {
  primary:
    "bg-[#00d4ff] text-[#0a1628] hover:bg-[#22d3ee] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]",
  secondary:
    "bg-[#2d3748] text-[#e2e8f0] hover:bg-[#4a5568] border border-[#4a5568]",
  outline:
    "border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10",
  ghost: "text-[#00d4ff] hover:bg-[#00d4ff]/10",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        font-semibold rounded-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:ring-offset-2 focus:ring-offset-[#0a1628]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
