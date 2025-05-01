"use client"

import type React from "react"

import { useState, useRef, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Loader2, Send, ArrowLeft, Upload } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  attachments?: FileList | null
  inquiryType: string
  message: string
  privacyPolicy: boolean
}

type FormErrors = {
  [key in keyof FormData]?: string
}

// サーバーアクションを作成
async function submitContactForm(formData: FormData) {
  try {
    // FormDataオブジェクトを作成
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone || '');
    form.append('inquiryType', formData.inquiryType);
    form.append('message', formData.message);

    // 添付ファイルの処理
    if (formData.attachments) {
      Array.from(formData.attachments).forEach((file) => {
        form.append('attachments', file);
      });
    }

    // フォームデータを送信
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: form,
    });

    if (!response.ok) {
      throw new Error('サーバーへの送信に失敗しました');
    }

    const data = await response.json();

    // 成功したレスポンスを返す
    return { success: true };
  } catch (error) {
    console.error('送信エラー:', error);
    return { success: false, error: '送信中にエラーが発生しました。しばらく経ってからもう一度お試しください。' };
  }
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
  const [attachedFileNames, setAttachedFileNames] = useState<string[]>([])

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const inquiryTypes = [
    { value: "", label: "選択してください" },
    { value: "operation", label: "民泊運営代行について" },
    { value: "interview", label: "取材依頼について" },
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData((prev) => ({ ...prev, attachments: files }));
    
    // ファイル名を保存
    const fileNames = files ? Array.from(files).map(file => file.name) : [];
    setAttachedFileNames(fileNames);
  }

  const validateForm = () => {
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
      // 実際のAPIエンドポイントを呼び出す
      const result = await submitContactForm(formData);
      
      if (result.success) {
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
        setAttachedFileNames([]);
      } else {
        // エラーメッセージを設定
        setSubmitError(result.error || "送信に失敗しました。もう一度お試しください。");
      }
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
    <div id="contact-form" className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-gold-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせありがとうございます</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              内容を確認次第、担当者よりご連絡いたします。通常2営業日以内にご返信いたしますので、しばらくお待ちください。
            </p>
            <Button onClick={resetForm} className="bg-gold-600 hover:bg-gold-700 text-white">
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
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
                {submitError}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  電話番号 <span className="text-gray-500 text-xs">(任意)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="090-1234-5678"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                />
              </div>

              {/* ファイルアップロード */}
              <div>
                <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">
                  添付ファイル <span className="text-gray-500 text-xs">(任意)</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="attachments" className="relative cursor-pointer bg-white rounded-md font-medium text-gold-600 hover:text-gold-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gold-500">
                        <span>ファイルを選択</span>
                        <input
                          id="attachments"
                          name="attachments"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">またはドラッグ&ドロップ</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, Word, Excel, 画像ファイルなど</p>
                    {attachedFileNames.length > 0 && (
                      <div className="mt-2 text-sm text-gray-500">
                        <p>選択されたファイル:</p>
                        <ul className="list-disc list-inside">
                          {attachedFileNames.map((name, index) => (
                            <li key={index}>{name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.inquiryType ? "border-red-500" : "border-gray-300"
                  } rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors appearance-none`}
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.inquiryType && <p className="mt-1 text-sm text-red-500">{errors.inquiryType}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="お問い合わせ内容をご記入ください"
                  className={`w-full px-4 py-2 bg-white border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacyPolicy"
                    name="privacyPolicy"
                    type="checkbox"
                    checked={formData.privacyPolicy}
                    onChange={handleCheckboxChange}
                    className={`w-4 h-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500 ${
                      errors.privacyPolicy ? "border-red-500" : ""
                    }`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacyPolicy" className="font-medium text-gray-700">
                    プライバシーポリシーに同意する <span className="text-red-500">*</span>
                  </label>
                  <p className="text-gray-500">
                    個人情報の取り扱いについては、
                    <a href="/privacy-policy" className="text-gold-600 hover:text-gold-800 underline" target="_blank">
                      プライバシーポリシー
                    </a>
                    をご確認ください。
                  </p>
                  {errors.privacyPolicy && <p className="mt-1 text-sm text-red-500">{errors.privacyPolicy}</p>}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-600 hover:bg-gold-700 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
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

