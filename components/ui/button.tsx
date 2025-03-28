import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ice-600 text-white hover:bg-ice-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-darkgray-600 text-snow-200 bg-transparent hover:bg-darkgray-800 hover:border-darkgray-500 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]",
        secondary: "bg-darkgray-700 text-snow-100 hover:bg-darkgray-600",
        ghost: "hover:bg-darkgray-800 hover:text-snow-100",
        link: "text-snow-300 underline-offset-4 hover:underline",
        gold: "bg-ice-600 text-white hover:bg-ice-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-ice-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

