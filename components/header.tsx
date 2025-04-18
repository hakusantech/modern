"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"

interface HeaderProps {
  currentPath?: string
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/cleannest-hokkaido-logo.png"
              alt="CleanNest Hokkaido"
              width={240}
              height={80}
              className="h-20 w-auto"
            />
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
          {/* 電話番号 (常に表示) */}
          <a 
            href="tel:011-827-7441" 
            className={`flex items-center gap-2 text-lg font-medium text-gold-500 hover:text-gold-600 hover:scale-105 transition-all duration-200 ${
              scrolled ? 'text-gold-600' : 'text-gold-500'
            }`}
          >
            <Phone className="h-5 w-5" />
            011-827-7441
          </a>

          <Button 
            className={`text-white px-6 py-2.5 h-auto text-base rounded-lg shadow-md transition-all duration-300 ${
              scrolled 
                ? 'bg-gold-500 hover:bg-gold-600'
                : 'bg-gray-800 hover:bg-gray-700'
            }`} 
            asChild
          >
            <Link href="/#contact">お問い合わせ</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-paleblue-600" />
            ) : (
              <Menu className="h-6 w-6 text-paleblue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
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

