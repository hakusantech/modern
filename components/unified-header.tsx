"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function UnifiedHeader() {
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
    { href: "/", label: "ホーム" },
    { href: "/services", label: "サービス", hasDropdown: true },
    { href: "/plans", label: "料金プラン" },
    { href: "/implementation-flow", label: "導入の流れ" },
    { href: "/property-introduction", label: "物件紹介" },
    { href: "/contact", label: "お問い合わせ" },
  ]

  // サービスドロップダウン項目
  const serviceItems = [
    { href: "/services/ryokan-management", label: "旅館運営代行", icon: "🏮" },
    { href: "/services/minpaku-management", label: "民泊運営代行", icon: "🏠" },
    { href: "/services/cleaning", label: "民泊清掃", icon: "✨" },
    { href: "/services/permits", label: "各種申請許可サポート", icon: "📝" },
    { href: "/implementation-flow", label: "導入の流れ", icon: "🔄" },
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
          ? "bg-darkgray-950/95 backdrop-blur-md shadow-md"
          : pathname === "/"
            ? "bg-transparent"
            : "bg-darkgray-950/95 backdrop-blur-md shadow-sm"
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
            <div className="relative h-12 w-12 mr-3 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/snowflake-logo.png"
                alt="CleanNest Hokkaido"
                width={48}
                height={48}
                className="h-12 w-12 transition-all duration-300"
              />
            </div>
            <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-ice-400">
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
                      ? "text-ice-400 bg-darkgray-800/70"
                      : "text-snow-300 hover:text-ice-400 hover:bg-darkgray-800/70"
                  }`}
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  aria-expanded={desktopDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="flex items-center">
                    {item.label}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        desktopDropdownOpen ? "rotate-180 text-ice-400" : isActive(item.href) ? "text-ice-400" : ""
                      }`}
                    />
                  </span>
                  {(isActive(item.href) || desktopDropdownOpen) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ice-400 rounded-full"></span>
                  )}
                </button>

                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      className="absolute left-0 mt-1 w-64 p-3 bg-darkgray-800/95 backdrop-blur-md rounded-lg shadow-xl border border-darkgray-700/50"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      onMouseLeave={() => setDesktopDropdownOpen(false)}
                    >
                      <div className="absolute top-0 left-6 w-3 h-3 bg-darkgray-800/95 border-t border-l border-darkgray-700/50 transform -translate-y-1.5 rotate-45"></div>

                      <div className="mb-2 pb-2 border-b border-darkgray-700/50">
                        <Link
                          href="/services"
                          className="block w-full px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-ice-500/10 text-ice-400 hover:bg-ice-500/20"
                        >
                          サービス一覧を見る
                        </Link>
                      </div>

                      <div className="space-y-1">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`flex items-center w-full px-3 py-2.5 rounded-md text-sm transition-all duration-200 ${
                              isActive(service.href)
                                ? "bg-darkgray-700 text-ice-400 font-medium"
                                : "text-snow-300 hover:bg-darkgray-700 hover:text-ice-400"
                            }`}
                          >
                            <span className="mr-2 text-lg">{service.icon}</span>
                            <span>{service.label}</span>
                          </Link>
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
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  isActive(item.href) ? "text-ice-400" : "text-snow-300 hover:text-ice-400 hover:bg-darkgray-800/70"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ice-400 rounded-full"></span>
                )}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-darkgray-600 text-snow-200 hover:bg-darkgray-800 hover:text-snow-50 transition-all duration-200 hover:scale-105"
              asChild
            >
              <Link href="/owner-recruitment">
                <span className="text-xs font-medium">オーナー様募集</span>
              </Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full bg-ice-600 hover:bg-ice-700 text-white transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
              asChild
            >
              <Link href="/contact">
                <span className="text-xs font-medium">お問い合わせ</span>
              </Link>
            </Button>
          </div>

          <button
            className="p-2 rounded-full text-snow-300 hover:bg-darkgray-800 transition-all duration-200 hover:text-ice-400"
            aria-label="検索"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2 rounded-full text-snow-300 hover:bg-darkgray-800 transition-all duration-200 hover:text-ice-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* モバイルナビゲーション */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-darkgray-900 border-t border-darkgray-800 shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-2">
                {mainNavItems.map((item) => (
                  <div key={item.href}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                            isActive(item.href)
                              ? "bg-darkgray-700 text-ice-400"
                              : "text-snow-300 hover:bg-darkgray-700 hover:text-ice-400"
                          }`}
                          onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                          aria-expanded={serviceDropdownOpen}
                        >
                          <span className="flex items-center justify-between">
                            {item.label}
                            <ChevronDown
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                serviceDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </button>

                        <AnimatePresence>
                          {serviceDropdownOpen && (
                            <motion.div
                              className="ml-4 mt-2 space-y-1 border-l border-darkgray-700 pl-2"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href="/services"
                                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                  pathname === "/services"
                                    ? "bg-darkgray-700 text-ice-400"
                                    : "text-snow-300 hover:bg-darkgray-700 hover:text-ice-400"
                                }`}
                                onClick={closeMenu}
                              >
                                サービス一覧
                              </Link>
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className={`flex items-center px-4 py-3 rounded-md text-sm transition-all duration-200 ${
                                    isActive(service.href)
                                      ? "bg-darkgray-700 text-ice-400 font-medium"
                                      : "text-snow-300 hover:bg-darkgray-700 hover:text-ice-400"
                                  }`}
                                  onClick={closeMenu}
                                >
                                  <span className="mr-2 text-lg">{service.icon}</span>
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
                        className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                          isActive(item.href)
                            ? "bg-darkgray-700 text-ice-400"
                            : "text-snow-300 hover:bg-darkgray-700 hover:text-ice-400"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-3 mt-3 border-t border-darkgray-700 space-y-2">
                  <Link
                    href="/owner-recruitment"
                    className="flex items-center px-4 py-3 rounded-md text-sm font-medium text-snow-300 hover:bg-darkgray-700 hover:text-ice-400 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <Info className="mr-2 h-4 w-4" />
                    オーナー様募集
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center px-4 py-3 rounded-md text-sm font-medium bg-ice-600 text-white hover:bg-ice-700 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    お問い合わせ
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

