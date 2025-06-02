"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

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

  // 現在のパスがアクティブかどうかを確認
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  // メインナビゲーション項目
  const mainNavItems = [
    { href: "/about", label: "CleanNest Hokkaidoとは" },
    { href: "/plans", label: "料金プラン" },
    { href: "/services", label: "民泊運営代行", hasDropdown: true },
    // { href: "/rental-properties", label: "民泊物件貸出" }, // 一時的に非表示
    // { href: "/property-introduction", label: "民泊物件紹介" }, // 一時的に非表示
    { href: "/contact", label: "お問い合わせ" }, // 金色のボタンから通常のリンクに変更
  ]

  // サービスドロップダウン項目
  const serviceItems = [
    // { href: "/services", label: "サービス一覧" }, // 重複項目を削除
    { href: "/implementation-flow", label: "導入の流れ" },
    { href: "/services/cleaning", label: "民泊清掃代行" },
    // { href: "/services/consultation", label: "民泊運営企画・相談" }, // 一時的に非表示
    // { href: "/services/diy-consultation", label: "民泊用DIY企画・相談" }, // 一時的に非表示
    { href: "/services/permits", label: "各種申請許可" },
  ]

  // サービスボタンのクリックハンドラー
  const handleServiceClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      e.preventDefault()
      setServiceDropdownOpen(!serviceDropdownOpen)
    } else {
      router.push("/services")
    }
  }

  // モバイルメニューを閉じる
  const closeMenu = () => {
    setMobileMenuOpen(false)
    setServiceDropdownOpen(false)
  }

  // ESCキーでメニューを閉じる
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu()
        setDesktopDropdownOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    closeMenu()
    setDesktopDropdownOpen(false)
  }, [pathname])

  // スクロールロックの制御
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // ドロップダウン外のクリックを検出
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // ドロップダウンアニメーションのバリアント
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-base-500/95 backdrop-blur-md shadow-md border-b border-primary-500/20"
          : pathname === "/"
            ? "bg-transparent"
            : "bg-base-500/95 backdrop-blur-md border-b border-primary-500/10"
      }`}
    >
      {/* メインヘッダー */}
      <div
        className={`container flex h-20 items-center justify-between ${
          scrolled || pathname !== "/" ? "py-2" : "py-4"
        } transition-all duration-300`}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-10 mr-2 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/snowflake-logo.png"
                alt="CleanNest Hokkaido"
                width={40}
                height={40}
                className="h-10 w-10 transition-all duration-300 drop-shadow-[0_0_4px_rgba(212,175,55,0.3)]"
              />
            </div>
            <span className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary-400">
              CleanNestHokkaido
            </span>
          </Link>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden lg:flex items-center space-x-2">
          {mainNavItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.href} className="relative" ref={dropdownRef}>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative overflow-hidden ${
                    isActive(item.href) || desktopDropdownOpen
                      ? "text-primary-300 bg-base-50/10"
                      : "text-text-light hover:text-primary-300 hover:bg-base-50/10"
                  }`}
                  onClick={() => {
                    setDesktopDropdownOpen(!desktopDropdownOpen);
                    if (!desktopDropdownOpen) {
                      router.push("/services");
                    }
                  }}
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  aria-expanded={desktopDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="flex items-center">
                    {item.label}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        desktopDropdownOpen ? "rotate-180 text-primary-300" : isActive(item.href) ? "text-primary-300" : ""
                      }`}
                    />
                  </span>
                  {(isActive(item.href) || desktopDropdownOpen) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"></span>
                  )}
                </button>

                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      className="absolute left-0 mt-1 w-64 p-3 bg-base-400/95 backdrop-blur-md rounded-lg shadow-xl border border-primary-500/20"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      onMouseLeave={() => setDesktopDropdownOpen(false)}
                    >
                      <div className="absolute top-0 left-6 w-3 h-3 bg-base-400/95 border-t border-l border-primary-500/20 transform -translate-y-1.5 rotate-45"></div>

                      <div className="space-y-1">
                        {serviceItems.map((service) => (
                          <div key={service.href}>
                            <Link
                              href={service.href}
                              className={`flex items-center w-full px-3 py-2.5 rounded-md text-sm transition-all duration-200 ${
                                isActive(service.href)
                                  ? "bg-base-300 text-primary-300 font-medium"
                                  : "text-text-light hover:bg-base-300 hover:text-primary-300"
                              }`}
                            >
                              <span>{service.label}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative overflow-hidden",
                  isActive(item.href)
                    ? "text-primary-300 bg-base-50/10"
                    : "text-text-light hover:text-primary-300 hover:bg-base-50/10"
                )}
              >
                <span>{item.label}</span>
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"></span>
                )}
              </Link>
            ),
          )}
        </nav>

        {/* 右側の要素（電話番号、モバイルメニューボタン） */}
        <div className="flex items-center space-x-4">
          {/* 電話番号と営業時間 (Desktop) */}
          <div className="hidden lg:flex flex-col items-end">
            <a href="tel:011-827-7441" className="font-bold text-lg text-gold-500 hover:text-gold-400 transition-colors">011-827-7441</a>
            <span className="text-xs text-gray-300 mt-0.5">9:30〜18:30（土日除く）</span>
          </div>

          {/* モバイルメニューボタン */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 rounded-full text-white bg-base-400/50 hover:bg-base-300 transition-all duration-200"
                onClick={() => setMobileMenuOpen(true)}
                aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs bg-base-500 p-6 flex flex-col text-text-light border-l-0 border-r border-primary-500/20">
              <SheetHeader>
                <SheetTitle className="text-primary-300 text-lg">メニュー</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-3 flex-1 overflow-y-auto">
                {mainNavItems.map((item) => (
                  <div key={item.href}>
                    {item.hasDropdown ? (
                      <>
                        <Link
                          href="/services"
                          className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-200 text-white ${
                            pathname === "/services"
                              ? "bg-base-400 text-primary-300"
                              : "hover:bg-base-400 hover:text-primary-300"
                          }`}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 text-xs text-primary-400 hover:text-primary-500 transition-all duration-200"
                          onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                          aria-expanded={serviceDropdownOpen}
                        >
                          <span className="flex items-center">
                            サブメニューを{serviceDropdownOpen ? '閉じる' : '開く'}
                            <ChevronDown
                              className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                                serviceDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </button>

                        <AnimatePresence>
                          {serviceDropdownOpen && (
                            <motion.div
                              className="ml-4 mt-1 space-y-1 border-l border-primary-800/20 pl-2"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className={`flex items-center px-4 py-3 rounded-md text-sm transition-all duration-200 text-white ${
                                    isActive(service.href)
                                      ? "bg-base-400 text-primary-300 font-medium"
                                      : "hover:bg-base-400 hover:text-primary-300"
                                  }`}
                                  onClick={closeMenu}
                                >
                                  <span>{service.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 text-white ${
                          isActive(item.href)
                            ? "bg-base-400 text-primary-300"
                            : "hover:bg-base-400 hover:text-primary-300"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              {/* 電話番号と営業時間 (Mobile) */}
              <div className="mt-6 pt-4 border-t border-primary-500/20 text-center">
                 <a href="tel:011-827-7441" className="font-bold text-xl text-gold-500 hover:text-gold-400 transition-colors block mb-2 btn-mobile">011-827-7441</a>
                 <p className="text-sm text-gray-300">9:30〜18:30（土日除く）</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}