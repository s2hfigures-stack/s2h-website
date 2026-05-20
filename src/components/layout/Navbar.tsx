'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { SITE } from '@/lib/data'

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navLinks = [
  { href: '/#products', label: t('Figures', 'الفيجورات') },
  { href: '/#how', label: t('How it works', 'ازاي بتشتري') },
  { href: '/loyalty', label: t('Points', 'النقاط') },
  { href: '/about', label: t('Our Story', 'قصتنا') },
  { href: '/exchange', label: t('Exchange & Refunds', 'الاستبدال والإرجاع') },
]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '0.7rem clamp(1rem, 4vw, 3rem)' : '1.1rem clamp(1rem, 4vw, 3rem)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
        transition: 'all 0.3s ease',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '36px', height: '36px', position: 'relative',
            filter: theme === 'light' ? 'invert(0)' : 'invert(1)',
          }}>
            <Image src="/images/logo.png" alt="S2H Logo" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="nav-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', fontWeight: 600,
                color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button onClick={toggleLang} style={{
            background: 'none', border: '1px solid var(--border)', color: 'var(--text)',
            padding: '0.35rem 0.7rem', cursor: 'pointer', fontFamily: 'var(--font-cairo)',
            fontSize: '0.75rem', fontWeight: 700, transition: 'all 0.2s',
          }}>
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>

          <button onClick={toggleTheme} style={{
            background: 'none', border: '1px solid var(--border)', color: 'var(--text)',
            width: '34px', height: '34px', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
          }}>
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="btn-primary nav-links"
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.78rem' }}>
            {t('Order Now', 'اطلب دلوقتي')}
          </a>

          <button onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99, background: 'var(--bg)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2.5rem',
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-cairo)', fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              fontWeight: 700, color: 'var(--text)', textDecoration: 'none',
            }}>{l.label}</a>
          ))}
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="btn-primary" onClick={() => setOpen(false)}>
            {t('Order Now', 'اطلب دلوقتي')}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
