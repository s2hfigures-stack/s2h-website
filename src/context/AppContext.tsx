'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Lang = 'en' | 'ar'

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  lang: Lang
  toggleLang: () => void
  t: (en: string, ar: string) => string
  isRTL: boolean
}

const AppContext = createContext<AppContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  lang: 'en',
  toggleLang: () => {},
  t: (en) => en,
  isRTL: false,
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('s2h-theme') as Theme
    if (saved) setTheme(saved)
    const savedLang = localStorage.getItem('s2h-lang') as Lang
    if (savedLang) setLang(savedLang)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('s2h-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    localStorage.setItem('s2h-lang', lang)
  }, [lang])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en')
  const t = (en: string, ar: string) => lang === 'ar' ? ar : en
  const isRTL = lang === 'ar'

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t, isRTL }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
