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

    // レスポンスのステータスコードをログに記録
    console.log('API Response Status:', response.status);

    // レスポンスのJSONを取得
    const data = await response.json();
    
    // サーバーからのレスポンスをログに記録
    console.log('API Response Data:', data);

    if (!response.ok) {
      // サーバーから返されたエラー情報を使用
      return { 
        success: false, 
        error: data.error || 'サーバーへの送信に失敗しました',
        detail: data.detail || data.error || 'サーバーへの送信に失敗しました'
      };
    }

    // 成功したレスポンスを返す
    return { success: true };
  } catch (error) {
    console.error('送信エラー:', error);
    
    // エラーメッセージの詳細を取得
    let errorMessage = '送信中にエラーが発生しました。しばらく経ってからもう一度お試しください。';
    let errorDetail = '';
    
    if (error instanceof Error) {
      errorDetail = error.message;
      
      // ネットワークエラーかどうかをチェック
      if (error.message.includes('Failed to fetch') || error.message.includes('Network Error')) {
        errorMessage = 'ネットワークエラーが発生しました。インターネット接続を確認してください。';
      }
    }
    
    return { 
      success: false, 
      error: errorMessage,
      detail: errorDetail
    };
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
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // ファイルアップロードの設定
  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
  const MAX_FILES = 5 // 最大5ファイル
  const ALLOWED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/plain'
  ]

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
    if (files) {
      handleFilesAdd(Array.from(files));
    }
  }

  // ファイル追加処理（バリデーション付き）
  const handleFilesAdd = (newFiles: File[]) => {
    const validFiles: File[] = [];
    const errors: string[] = [];

    newFiles.forEach(file => {
      // ファイル数チェック
      if (attachedFiles.length + validFiles.length >= MAX_FILES) {
        errors.push(`ファイル数は最大${MAX_FILES}個までです`);
        return;
      }

      // ファイルサイズチェック
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: ファイルサイズが10MBを超えています`);
        return;
      }

      // ファイルタイプチェック
      if (!ALLOWED_TYPES.includes(file.type)) {
        errors.push(`${file.name}: サポートされていないファイル形式です`);
        return;
      }

      // 重複チェック
      if (attachedFiles.some(existingFile => existingFile.name === file.name && existingFile.size === file.size)) {
        errors.push(`${file.name}: 同じファイルが既に選択されています`);
        return;
      }

      validFiles.push(file);
    });

    if (errors.length > 0) {
      setSubmitError(errors.join('\n'));
    } else {
      setSubmitError(null);
    }

    setAttachedFiles(prev => [...prev, ...validFiles]);
    
    // FormDataを更新
    const fileList = new DataTransfer();
    [...attachedFiles, ...validFiles].forEach(file => fileList.items.add(file));
    setFormData(prev => ({ ...prev, attachments: fileList.files }));
  }

  // 個別ファイル削除
  const removeFile = (index: number) => {
    const newFiles = attachedFiles.filter((_, i) => i !== index);
    setAttachedFiles(newFiles);
    
    // FormDataを更新
    const fileList = new DataTransfer();
    newFiles.forEach(file => fileList.items.add(file));
    setFormData(prev => ({ ...prev, attachments: fileList.files }));
  }

  // ドラッグ&ドロップ処理
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFilesAdd(files);
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
        setAttachedFiles([]);
      } else {
        // エラーメッセージを設定
        setSubmitError(result.error || "送信に失敗しました。もう一度お試しください。");
        
        // 詳細なエラーをコンソールに出力
        if (result.detail) {
          console.error("詳細エラー:", result.detail);
        }
      }
    } catch (error) {
      console.error("送信エラー:", error)
      
      // エラーメッセージをより具体的に
      let errorMessage = "送信中にエラーが発生しました。しばらく経ってからもう一度お試しください。";
      
      if (error instanceof Error) {
        const networkError = error.message.includes("Failed to fetch") || 
                            error.message.includes("Network Error") ||
                            error.message.includes("network request failed");
                            
        if (networkError) {
          errorMessage = "ネットワークエラーが発生しました。インターネット接続を確認してください。";
        }
      }
      
      setSubmitError(errorMessage);
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
                  添付ファイル <span className="text-gray-500 text-xs">(任意、最大{MAX_FILES}ファイル)</span>
                </label>
                <div 
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gold-400 transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
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
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.txt"
                        />
                      </label>
                      <p className="pl-1">またはドラッグ&ドロップ</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, Word, Excel, 画像ファイルなど（1ファイル最大10MB）
                    </p>
                  </div>
                </div>

                {/* アップロードされたファイル一覧 */}
                {attachedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">選択されたファイル ({attachedFiles.length}/{MAX_FILES})</h4>
                    <div className="space-y-2">
                      {attachedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-gold-100 rounded flex items-center justify-center">
                                <Upload className="w-4 h-4 text-gold-600" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="flex-shrink-0 p-1 text-red-400 hover:text-red-600 transition-colors"
                            title="ファイルを削除"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

