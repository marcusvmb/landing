'use client'

import { useState, useEffect, FormEvent, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLeadModal } from '@/contexts/LeadModalContext'
import { supabase, Lead } from '@/lib/supabase'

type FormState = 'step1' | 'step2' | 'loading' | 'success' | 'error'

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const desktopModalVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 }
  },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } }
}

const mobileSheetVariants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 }
  },
  exit: { y: '100%', transition: { duration: 0.2 } }
}

export default function LeadCaptureModal() {
  const { isOpen, closeModal } = useLeadModal()
  const [formState, setFormState] = useState<FormState>('step1')
  const [errorMessage, setErrorMessage] = useState('')
  const [leadId, setLeadId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const countryDropdownRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+55',
    phone: '',
    profile: 'investidor_pf' as Lead['profile'],
    suggestion: ''
  })

  // Lista de códigos de país mais comuns
  const countryCodes = [
    { code: '+55', country: 'BR', flag: '🇧🇷' },
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+351', country: 'PT', flag: '🇵🇹' },
    { code: '+34', country: 'ES', flag: '🇪🇸' },
    { code: '+39', country: 'IT', flag: '🇮🇹' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
  ]

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close country dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false)
      }
    }
    if (isCountryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isCountryDropdownOpen])

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormState('step1')
      setErrorMessage('')
      setLeadId(null)
      setIsCountryDropdownOpen(false)
      setFormData({
        name: '',
        email: '',
        countryCode: '+55',
        phone: '',
        profile: 'investidor_pf',
        suggestion: ''
      })
    }
  }, [isOpen])

  // Close on ESC key and lock body scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeModal])

  // Phone mask: (XX) XXXXX-XXXX
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers.length ? `(${numbers}` : ''
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData(prev => ({ ...prev, phone: formatted }))
  }

  // Step 1: Submit lead data
  const handleStep1Submit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const fullPhone = `${formData.countryCode} ${formData.phone}`
      const { data, error } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          profile: formData.profile
        }])
        .select('id')
        .single()

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('Este email já está cadastrado na lista de espera.')
        } else {
          setErrorMessage('Ocorreu um erro. Tente novamente.')
        }
        setFormState('error')
        return
      }

      setLeadId(data.id)
      setFormState('step2')
    } catch {
      setErrorMessage('Erro de conexão. Verifique sua internet.')
      setFormState('error')
    }
  }

  // Step 2: Submit feedback
  const handleStep2Submit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    try {
      await supabase
        .from('leads')
        .update({
          missing_tool: formData.suggestion || null
        })
        .eq('id', leadId)

      setFormState('success')
    } catch {
      // Even if feedback fails, lead is already saved
      setFormState('success')
    }
  }

  // Skip step 2
  const handleSkip = () => {
    setFormState('success')
  }

  // Progress indicator - inline JSX
  const renderProgressIndicator = (currentStep: 1 | 2) => (
    <div className="flex items-center justify-center gap-2 mb-6">
      <span className={`w-3 h-3 rounded-full transition-colors ${currentStep >= 1 ? 'bg-[#5C5CFF]' : 'bg-gray-300'}`} />
      <div className={`w-8 h-0.5 transition-colors ${currentStep >= 2 ? 'bg-[#5C5CFF]' : 'bg-gray-300'}`} />
      <span className={`w-3 h-3 rounded-full transition-colors ${currentStep >= 2 ? 'bg-[#5C5CFF]' : 'bg-gray-300'}`} />
      <span className="ml-2 text-xs text-gray-500">Etapa {currentStep} de 2</span>
    </div>
  )

  // Form content - inline JSX (NOT a component)
  const formContent = (
    <>
      {/* SUCCESS STATE */}
      {formState === 'success' && (
        <motion.div
          className="p-5 md:p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
        >
          <motion.div
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' as const, stiffness: 400, damping: 15, delay: 0.1 }}
          >
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h3 className="text-2xl font-bold text-[#2B3259] mb-2">
            {formData.suggestion ? 'Obrigado pela sugestão!' : 'Seu lugar está garantido!'}
          </h3>

          <p className="text-gray-600 mb-6">
            Você agora é um <span className="font-semibold text-[#5C5CFF]">Fundador</span>.
          </p>

          <motion.button
            onClick={closeModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-[#5C5CFF] text-white font-semibold rounded-xl hover:bg-[#4a4ae6] transition-colors"
          >
            Fechar
          </motion.button>
        </motion.div>
      )}

      {/* STEP 2: FEEDBACK */}
      {formState === 'step2' && (
        <form onSubmit={handleStep2Submit} className="p-5 md:p-8">
          {/* Success indicator */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-4 p-3 bg-green-50 rounded-xl border border-green-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium text-green-700">Vaga Garantida!</span>
          </motion.div>

          {renderProgressIndicator(2)}

          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#2B3259] mb-1">
              Nos ajude a criar a ferramenta perfeita
            </h3>
          </div>

          {/* Single Feedback Field */}
          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-2">
              Você agora faz parte da construção do Hub. Que funcionalidade faria você indicar o Hub para outros investidores?
            </label>
            <textarea
              id="suggestion"
              rows={2}
              maxLength={280}
              value={formData.suggestion}
              onChange={(e) => setFormData(prev => ({ ...prev, suggestion: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5C5CFF] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Ex: Simulador de cenários, alertas personalizados, relatório para clientes..."
            />
            {formData.suggestion.length > 0 && (
              <p className="text-right text-xs text-gray-400 mt-1">{formData.suggestion.length}/280</p>
            )}
          </div>

          {/* Microcopy motivacional */}
          <p className="text-xs text-gray-500 text-center mt-3">
            Sugestões de Fundadores têm peso extra no nosso roadmap.
          </p>

          {/* Buttons - Redesigned */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 bg-[#5C5CFF] text-white font-semibold rounded-xl hover:bg-[#4a4ae6] transition-colors flex items-center justify-center gap-2 shadow-[0_10px_30px_-10px_rgba(92,92,255,0.4)]"
            >
              Enviar Sugestão
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            <button
              type="button"
              onClick={handleSkip}
              className="text-gray-500 text-sm underline hover:text-gray-700 transition-colors"
            >
              Pular esta etapa
            </button>
          </div>
        </form>
      )}

      {/* STEP 1: LEAD CAPTURE */}
      {(formState === 'step1' || formState === 'loading' || formState === 'error') && (
        <form onSubmit={handleStep1Submit} className="p-5 md:p-8">
          {/* Header */}
          <div className="text-center mb-4">
            <h3 id="modal-title" className="text-2xl font-bold text-[#2B3259] mb-1">
              Reserve seu lugar de fundador
            </h3>
            <p className="text-sm text-gray-500">
              Vagas limitadas para fundadores
            </p>
          </div>

          {renderProgressIndicator(1)}

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                required
                minLength={2}
                autoFocus
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5C5CFF] focus:border-transparent outline-none transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                inputMode="email"
                autoComplete="email"
                autoCapitalize="off"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5C5CFF] focus:border-transparent outline-none transition-all"
                placeholder="seu@email.com"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp
              </label>
              <div className="flex gap-2">
                {/* Código do país - Dropdown Premium */}
                <div className="relative" ref={countryDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className={`
                      flex items-center gap-1.5 px-3 py-3
                      border rounded-xl outline-none
                      transition-all
                      ${isCountryDropdownOpen
                        ? 'border-transparent ring-2 ring-[#5C5CFF]'
                        : 'border-gray-300'
                      }
                    `}
                  >
                    <span className="text-lg leading-none">
                      {countryCodes.find(c => c.code === formData.countryCode)?.flag}
                    </span>
                    <span className="text-sm font-medium text-gray-700 min-w-[40px]">
                      {formData.countryCode}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isCountryDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className={`
                          absolute z-50 mt-1.5
                          bg-white border border-gray-200 rounded-xl
                          shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]
                          overflow-hidden
                          ${isMobile ? 'left-0 right-auto w-[140px]' : 'left-0 w-[160px]'}
                        `}
                      >
                        <div className="max-h-[200px] overflow-y-auto py-1 scrollbar-thin">
                          {countryCodes.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, countryCode: country.code }))
                                setIsCountryDropdownOpen(false)
                              }}
                              className={`
                                w-full flex items-center gap-3 px-3 py-2.5
                                text-left transition-colors duration-100
                                ${formData.countryCode === country.code
                                  ? 'bg-[#5C5CFF]/10 text-[#5C5CFF]'
                                  : 'hover:bg-gray-50 text-gray-700'
                                }
                              `}
                            >
                              <span className="text-xl leading-none">{country.flag}</span>
                              <span className="text-sm font-medium">{country.code}</span>
                              <span className="text-xs text-gray-400 ml-auto">{country.country}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Número */}
                <input
                  type="tel"
                  id="phone"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5C5CFF] focus:border-transparent outline-none transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            {/* Perfil - Cards com ícones */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qual seu perfil?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {/* Investidor */}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, profile: 'investidor_pf' }))}
                  className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    formData.profile === 'investidor_pf'
                      ? 'border-[#5C5CFF] bg-[#5C5CFF]/5 text-[#5C5CFF]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs font-medium">Investidor</span>
                </button>

                {/* Assessor */}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, profile: 'assessor' }))}
                  className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    formData.profile === 'assessor'
                      ? 'border-[#5C5CFF] bg-[#5C5CFF]/5 text-[#5C5CFF]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium">Assessor</span>
                </button>

                {/* Moradia */}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, profile: 'moradia' }))}
                  className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                    formData.profile === 'moradia'
                      ? 'border-[#5C5CFF] bg-[#5C5CFF]/5 text-[#5C5CFF]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-xs font-medium">Moradia</span>
                </button>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {formState === 'error' && (
            <motion.div
              className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errorMessage}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={formState === 'loading'}
            whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
            className="w-full mt-6 py-4 px-6 bg-[#5C5CFF] text-white font-bold rounded-xl hover:bg-[#4a4ae6] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_10px_30px_-10px_rgba(92,92,255,0.4)]"
          >
            {formState === 'loading' ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </>
            ) : (
              <>
                Confirmar minha reserva
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </motion.button>

          {/* Microcopy */}
          <p className="mt-4 text-center text-xs text-gray-500">
            Sem spam. Avisaremos você primeiro quando lançarmos.
          </p>
        </form>
      )}
    </>
  )

  // Close button component
  const closeButton = (
    <motion.button
      onClick={closeModal}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
      aria-label="Fechar"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </motion.button>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#2B3259]/80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          />

          {/* Desktop Modal */}
          {!isMobile && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_25px_50px_-12px_rgba(92,92,255,0.25)] overflow-hidden"
              variants={desktopModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {closeButton}
              {formContent}
            </motion.div>
          )}

          {/* Mobile Full Screen Modal */}
          {isMobile && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="absolute inset-0 bg-white overflow-y-auto"
              style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
              initial={{ y: '100%' }}
              animate={{ y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 30 } }}
              exit={{ y: '100%', transition: { duration: 0.2 } }}
            >
              {/* Header fixo */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 px-4 py-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {formState === 'step1' || formState === 'loading' || formState === 'error'
                      ? 'Etapa 1 de 2'
                      : formState === 'step2'
                        ? 'Etapa 2 de 2'
                        : 'Concluído'}
                  </span>
                  <button
                    onClick={closeModal}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full"
                    aria-label="Fechar"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Conteúdo com scroll */}
              <div>
                {formContent}
              </div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  )
}
