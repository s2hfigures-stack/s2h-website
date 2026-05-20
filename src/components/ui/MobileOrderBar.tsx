'use client'

import { useApp } from '@/context/AppContext'
import { SITE } from '@/lib/data'

export default function MobileOrderBar() {
  const { t } = useApp()

  return (
    <>
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 998,
        background: 'var(--text)', padding: '0.9rem 1.5rem',
        display: 'flex', gap: '0.75rem', alignItems: 'center',
        borderTop: '1px solid var(--border)',
      }} className="mobile-order-bar">
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحبا S2H! عايز أطلب فيجور 👋')}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, background: '#25D366', color: '#fff',
            padding: '0.8rem', textAlign: 'center',
            fontFamily: 'var(--font-cairo)', fontWeight: 700, fontSize: '0.85rem',
            textDecoration: 'none', display: 'block',
          }}
        >
          💬 {t('Order on WhatsApp', 'اطلب على واتساب')}
        </a>
        <a
          href="#products"
          style={{
            flex: 1, background: 'var(--bg)', color: 'var(--text)',
            padding: '0.8rem', textAlign: 'center',
            fontFamily: 'var(--font-cairo)', fontWeight: 700, fontSize: '0.85rem',
            textDecoration: 'none', display: 'block',
          }}
        >
          {t('Browse', 'الفيجورات')}
        </a>
      </div>

      <style>{`
        .mobile-order-bar { display: none; }
        @media (max-width: 768px) { .mobile-order-bar { display: flex; } }
        @media (max-width: 768px) { body { padding-bottom: 70px; } }
      `}</style>
    </>
  )
}
