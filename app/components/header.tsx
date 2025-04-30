"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

interface HeaderProps {
  currentPath?: string
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return false;
    }
    if (path === "/" && currentPath === "/") return true
    if (path !== "/" && currentPath.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { href: "/about", label: "CleanNest Hokkaidoとは" },
    { href: "/plans", label: "料金プラン" },
    { href: "/services", label: "民泊運営代行" },
    { href: "/owner-recruitment", label: "民泊物件貸出" },
    { href: "/rental-properties", label: "民泊物件紹介" },
    { href: "/contact", label: "お問い合わせ" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gold-200/30 bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo size={24} />
              <div className="text-xl font-bold">
                <span className="text-gray-900 group-hover:text-gray-700 transition-colors">CleanNest</span>
                <span className="text-gold-500 group-hover:text-gold-600 transition-colors">Hokkaido</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={cn(
                  "text-gray-700 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider font-medium pb-1",
                  isActive(link.href) ? "text-gold-500 border-b-2 border-gold-500" : "border-b-2 border-transparent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm"
              className="bg-gold-500 hover:bg-gold-600 text-white border-none shadow-md hover:shadow-lg transition-all">
              <Link href="/#contact">お問い合わせ</Link>
            </Button>
          </nav>

          <div className="flex items-center md:hidden">
            {/* Mobile Menu Button */}
            <button
              className="flex items-center justify-center p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-gold-500" /> : <Menu className="h-6 w-6 text-gold-500" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-in-out",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          {/* 黒背景上での装飾的なロゴ */}
          <div className="absolute bottom-8 right-8 opacity-30">
            <Logo size={80} onDark={true} />
          </div>
        </div>
        
        {/* Menu Content */}
        <div className={cn(
          "fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex justify-between items-center p-4 border-b border-gold-200/30 h-16">
             <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                <Logo size={24} />
                <div className="text-xl font-bold">
                  <span className="text-gray-900 group-hover:text-gray-700 transition-colors">CleanNest</span>
                  <span className="text-gold-500 group-hover:text-gold-600 transition-colors">Hokkaido</span>
                </div>
              </Link>
            </div>
            <button
              className="p-2 -mr-2" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="メニューを閉じる"
            >
              <X className="h-6 w-6 text-gold-500" />
            </button>
          </div>
          <nav className="p-6 flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2 text-gray-700 hover:text-gold-500 transition-colors text-base font-medium",
                  isActive(link.href) ? "text-gold-500 font-semibold" : ""
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Contact button moved up */}
            <Button asChild size="lg"
              className="mt-6 w-full bg-gold-500 hover:bg-gold-600 text-white border-none shadow-md hover:shadow-lg transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/#contact">お問い合わせ</Link>
            </Button>

            {/* Footer links below separator */}
            <div className="pt-5 border-t border-gray-200 space-y-2">
              <Link
                href="/privacy-policy"
                className={cn(
                  "block py-1 text-gray-500 hover:text-gold-500 transition-colors text-sm font-medium",
                  isActive("/privacy-policy") ? "text-gold-500 font-semibold" : ""
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className={cn(
                  "block py-1 text-gray-500 hover:text-gold-500 transition-colors text-sm font-medium",
                  isActive("/terms") ? "text-gold-500 font-semibold" : ""
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                利用規約
              </Link>
            </div>

          </nav>
        </div>
      </div>
    </>
  )
}

