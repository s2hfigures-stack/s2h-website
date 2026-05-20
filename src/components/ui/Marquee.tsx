'use client'

import { useApp } from '@/context/AppContext'

export default function Marquee() {
  const { t } = useApp()

  const items = [
    t('CUSTOM FIGURES', 'فيجورات مخصصة'),
    t('FROM SCREEN TO REALITY', 'من الشاشة للحقيقة'),
    t('CAIRO EGYPT', 'القاهرة مصر'),
    t('500 EGP', '٥٠٠ جنيه'),
    t('CASH ON DELIVERY', 'دفع عند الاستلام'),
    t('ALL OVER EGYPT', 'توصيل لكل مصر'),
    t('12CM FIGURES', 'فيجور ١٢ سم'),
    t('ORDER ON WHATSAPP', 'اطلب على واتساب'),
  ]

  const repeated = [...items, ...items, ...items]

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      padding: '0.9rem 0',
      background: 'var(--bg)',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(to right, var(--bg), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(to left, var(--bg), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex', gap: '0',
        animation: 'marquee 30s linear infinite',
        width: 'max-content',
      }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap',
            padding: '0 2rem',
          }}>
            {item}
            <span style={{ marginLeft: '2rem', color: 'var(--border)', opacity: 0.5 }}>·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}
