import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  title?: string
  subtitle?: string
  description?: string
  fullWidth?: boolean
  background?: "white" | "muted" | "primary" | "gold"
  centered?: boolean
  withContainer?: boolean
}

export function Section({
  children,
  className,
  id,
  title,
  subtitle,
  description,
  fullWidth = false,
  background = "white",
  centered = false,
  withContainer = true,
}: SectionProps) {
  const bgClasses = {
    white: "bg-darkgray-950",
    muted: "bg-darkgray-900",
    primary: "bg-darkgray-800",
    gold: "bg-darkgray-950",
  }

  const containerContent = (
    <>
      {(title || subtitle || description) && (
        <div className={cn("mb-10", centered && "text-center")}>
          {subtitle && (
            <div className="mb-2">
              <span
                className={cn(
                  "text-sm font-medium uppercase tracking-wider",
                  background === "primary" ? "text-gold-400" : "text-gold-600",
                )}
              >
                {subtitle}
              </span>
            </div>
          )}
          {title && (
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4",
                background === "primary" ? "text-snow-50" : "text-snow-50",
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                "text-lg max-w-3xl",
                background === "primary" ? "text-snow-300" : "text-snow-300",
                centered && "mx-auto",
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </>
  )

  return (
    <section id={id} className={cn("py-12 md:py-20", bgClasses[background], className)}>
      {withContainer ? (
        <div className={cn("container", fullWidth && "max-w-none")}>{containerContent}</div>
      ) : (
        containerContent
      )}
    </section>
  )
}

