import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CardGridProps {
  children: React.ReactNode
  className?: string
  columns?: 1 | 2 | 3 | 4
  gap?: "small" | "medium" | "large"
}

export function CardGrid({ children, className, columns = 3, gap = "medium" }: CardGridProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const gapClasses = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8",
  }

  return <div className={cn("grid", columnClasses[columns], gapClasses[gap], className)}>{children}</div>
}

interface CardItemProps {
  title?: string
  subtitle?: string
  content?: React.ReactNode
  footer?: React.ReactNode
  className?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
}

export function CardItem({
  title,
  subtitle,
  content,
  footer,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
}: CardItemProps) {
  return (
    <Card className={className}>
      {(title || subtitle) && (
        <CardHeader className={headerClassName}>
          {title && <h3 className="text-xl font-bold">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </CardHeader>
      )}
      {content && <CardContent className={contentClassName}>{content}</CardContent>}
      {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
    </Card>
  )
}

