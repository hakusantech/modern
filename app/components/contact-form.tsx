"use client"

import type React from "react"

import { useState, useRef, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Loader2, Send, ArrowLeft } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  inquiryType: string
  message: string
  privacyPolicy: boolean
}

type FormErrors = {
  [key in keyof FormData]?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacyPolicy: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const inquiryTypes = [
    { value: "", label: "選択してください" },
    { value: "general", label: "一般的なお問い合わせ" },
    { value: "service", label: "サービスについて" },
    { value: "estimate", label: "お見積もり依頼" },
    { value: "property", label: "物件に関するお問い合わせ" },
    { value: "partnership", label: "業務提携について" },
    { value: "other", label: "その他" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))

    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください"
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください"
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "お問い合わせ種別を選択してください"
    }

    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください"
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = "プライバシーポリシーに同意してください"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // 実際のAPIエンドポイントに置き換える
      // ここではデモのため、タイムアウトを使用
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // 送信成功
      setIsSubmitted(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
        privacyPolicy: false,
      })
    } catch (error) {
      console.error("送信エラー:", error)
      setSubmitError("送信中にエラーが発生しました。しばらく経ってからもう一度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setSubmitError(null)
    setErrors({})
  }

  return (
    <div className="bg-darkgray-900 rounded-lg shadow-xl overflow-hidden border border-darkgray-800">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 bg-ice-500/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-ice-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">お問い合わせありがとうございます</h2>
            <p className="text-snow-300 mb-8 max-w-md">
              内容を確認次第、担当者よりご連絡いたします。通常2営業日以内にご返信いたしますので、しばらくお待ちください。
            </p>
            <Button onClick={resetForm} className="bg-ice-600 hover:bg-ice-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              フォームに戻る
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 md:p-8"
          >
            {submitError && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400">
                {submitError}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-snow-200 mb-1">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className={`w-full px-4 py-2 bg-darkgray-800 border ${
                    errors.name ? "border-red-500" : "border-darkgray-700"
                  } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-colors`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-snow-200 mb-1">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`w-full px-4 py-2 bg-darkgray-800 border ${
                    errors.email ? "border-red-500" : "border-darkgray-700"
                  } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-colors`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-snow-200 mb-1">
                  電話番号 <span className="text-snow-400 text-xs">(任意)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="090-1234-5678"
                  className="w-full px-4 py-2 bg-darkgray-800 border border-darkgray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-snow-200 mb-1">
                  お問い合わせ種別 <span className="text-red-400">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-darkgray-800 border ${
                    errors.inquiryType ? "border-red-500" : "border-darkgray-700"
                  } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-colors appearance-none`}
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.inquiryType && <p className="mt-1 text-sm text-red-400">{errors.inquiryType}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-snow-200 mb-1">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="お問い合わせ内容を入力してください"
                  className={`w-full px-4 py-2 bg-darkgray-800 border ${
                    errors.message ? "border-red-500" : "border-darkgray-700"
                  } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-colors`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacyPolicy"
                    name="privacyPolicy"
                    type="checkbox"
                    checked={formData.privacyPolicy}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-ice-600 bg-darkgray-800 border-darkgray-700 rounded focus:ring-ice-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacyPolicy" className="font-medium text-snow-300">
                    <span className="text-red-400">*</span> プライバシーポリシーに同意します
                  </label>
                  <p className="text-snow-400 text-xs mt-1">
                    <a href="/privacy-policy" className="text-ice-400 hover:underline">
                      プライバシーポリシー
                    </a>
                    をご確認の上、同意いただける場合はチェックを入れてください。
                  </p>
                  {errors.privacyPolicy && <p className="mt-1 text-sm text-red-400">{errors.privacyPolicy}</p>}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ice-600 hover:bg-ice-700 text-white py-3 rounded-md transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    送信する
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

