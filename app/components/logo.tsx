import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  onDark?: boolean;
  className?: string;
}

export function Logo({ size = 32, onDark = false, className }: LogoProps) {
  return (
    <div 
      className={cn(
        "relative flex items-center justify-center", 
        onDark && "logo-glow",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/snowflake-logo.png"
        alt="CleanNest Hokkaido"
        width={size}
        height={size}
        className={cn(
          "object-contain",
          onDark && "drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
        )}
      />
      
      {/* 黒背景上で表示する白いぼかし効果 */}
      {onDark && (
        <div 
          className="absolute inset-0 rounded-full bg-white/10 blur-md -z-10"
          style={{ width: size * 1.5, height: size * 1.5, left: -size * 0.25, top: -size * 0.25 }}
        ></div>
      )}
    </div>
  );
} 