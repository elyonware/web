import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface NeonButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  color?: string;
  glowColor?: string;
}

export default function NeonButton({
  children,
  color = "#00fffc",
  glowColor = "#00fffc",
  className = "",
  ...props
}: NeonButtonProps) {
  return (
    <a
      {...props}
      className={`relative inline-block overflow-hidden px-6 py-3 text-lg uppercase tracking-wide transition-all duration-500 neon-pulse-animation neon-bounce-animation ${className}`}
      style={{ color }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.style.color = "#000";
        e.currentTarget.style.boxShadow = `0 0 5px ${glowColor},0 0 25px ${glowColor},0 0 50px ${glowColor},0 0 200px ${glowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = color;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        className="absolute left-0 top-0 h-[2px] w-full"
        style={{ background: `linear-gradient(to right, transparent, ${color})` }}
      />
      <span
        className="absolute right-0 top-[-100%] h-full w-[2px]"
        style={{ background: `linear-gradient(to bottom, transparent, ${color})` }}
      />
      <span
        className="absolute bottom-0 right-0 h-[2px] w-full"
        style={{ background: `linear-gradient(to left, transparent, ${color})` }}
      />
      <span
        className="absolute bottom-[-100%] left-0 h-full w-[2px]"
        style={{ background: `linear-gradient(to top, transparent, ${color})` }}
      />
      {children}
    </a>
  );
}
