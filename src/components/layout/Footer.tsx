'use client'

import { useApp } from '@/context/AppContext'
import { SITE } from '@/lib/data'
import Link from 'next/link'

const socials = [
  { href: (s: typeof SITE) => `https://wa.me/${s.whatsapp}`, label: 'WhatsApp', icon: '💬', color: '#25D366' },
  { href: (s: typeof SITE) => `https://instagram.com/${s.instagram}`, label: 'Instagram', icon: '📸', color: '#E1306C' },
  { href: (s: typeof SITE) => `https://tiktok.com/@${s.tiktok}`, label: 'TikTok', icon: '🎵', color: '#ff0050' },
  { href: (s: typeof SITE) => `https://facebook.com/${s.facebook}`, label: 'Facebook', icon: '📘', color: '#1877F2' },
]

export default function Footer() {
  const { t } = useApp()

  const pageLinks = [
    { href: '/about', label: t('Our Story', 'قصتنا') },
    { href: '/loyalty', label: t('Points', 'النقاط') },
    { href: '/exchange', label: t('Exchange & Refunds', 'الاستبدال والإرجاع') },
  ]

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-cairo)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '0.3rem' }}>S2H</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {SITE.slogan}
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href(SITE)} target="_blank" rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: '42px', height: '42px', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', textDecoration: 'none',
                  transition: 'border-color 0.2s, transform 0.2s',
                  background: 'var(--bg)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = s.color
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            {SITE.location}
          </div>
        </div>

        {/* Page links */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
          {pageLinks.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '1px',
              textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} S2H · {SITE.domain}
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            {t('All rights reserved', 'جميع الحقوق محفوظة')}
          </p>
        </div>
      </div>
    </footer>
  )
}