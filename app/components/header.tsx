"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Menu, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  currentPath?: string
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true
    if (path !== "/" && currentPath.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { href: "/#about", label: "会社概要" },
    { href: "/services", label: "サービス" },
    { href: "/plans", label: "プラン説明" },
    { href: "/implementation-flow", label: "導入の流れ" },
    { href: "/rental-properties", label: "民泊物件募集" },
    { href: "/property-recruitment", label: "オーナー様募集" },
    { href: "/#contact", label: "お問い合わせ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-silver-300" />
          <Link href="/" className="text-xl font-bold">
            <span className="text-white">CleanNest</span>
            <span className="text-silver-300">Hokkaido</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link ${isActive(link.href) ? "active" : ""}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/#contact">お問い合わせ</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-silver-300" /> : <Menu className="h-6 w-6 text-silver-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/50">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

