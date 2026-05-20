'use client'

import { useApp } from '@/context/AppContext'
import { STEPS, WHY_US, SITE } from '@/lib/data'
import { useAOS } from '@/lib/useAOS'

export function HowItWorks() {
  const { t } = useApp()
  useAOS()

  return (
    <section id="how" style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            // {t('Simple Process', 'بسيطة جداً')}
          </div>
          <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
            {t('3 Steps Only', '٣ خطوات بس')}
          </h2>
        </div>

        {STEPS.map((step, i) => (
          <div key={step.num} data-aos data-aos-delay={String(i * 100)}
            style={{
              display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
              padding: '2rem 0',
              borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
            <div style={{
              fontFamily: 'var(--font-cairo)', fontWeight: 900,
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', lineHeight: 1,
              color: 'var(--border)', flexShrink: 0, width: '60px',
            }}>{step.num}</div>
            <div style={{ paddingTop: '0.3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: 'var(--text)', marginBottom: '0.4rem' }}>
                {t(step.en, step.ar)}
              </h3>
              <p style={{ fontFamily: 'var(--font-cairo)', fontSize: 'clamp(0.82rem, 2vw, 0.9rem)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {t(step.descEn, step.descAr)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function WhyUs() {
  const { t } = useApp()
  useAOS()

  return (
    <section id="why" style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            // {t('Why choose us', 'ليه تختارنا')}
          </div>
          <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
            {t('Why S2H?', 'ليه S2H؟')}
          </h2>
        </div>

        <div className="why-grid">
          {WHY_US.map((w, i) => (
            <div key={w.en} data-aos data-aos-delay={String(i * 80)}
              style={{ background: 'var(--bg)', padding: 'clamp(1.5rem, 3vw, 2.5rem) 1.5rem', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
            >
              <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>{w.icon}</span>
              <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.4rem' }}>
                {t(w.en, w.ar)}
              </h3>
              <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {t(w.descEn, w.descAr)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTABanner() {
  const { t } = useApp()

  return (
    <section style={{
      padding: 'clamp(3rem,6vw,6rem) 1.5rem',
      background: 'var(--text)', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(var(--bg) 1px, transparent 1px), linear-gradient(90deg, var(--bg) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontFamily: 'var(--font-cairo)', fontWeight: 900,
          fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: 'var(--bg)',
          lineHeight: 1, marginBottom: '0.8rem',
        }}>
          {t('Ready to Order?', 'جاهز تطلب؟')}
        </h2>
        <p style={{ fontFamily: 'var(--font-cairo)', fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
          {t('One click. We handle the rest.', 'ضغطة واحدة. إحنا بنعمل الباقي.')}
        </p>
        <div className="hero-btns">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
            style={{
              background: 'var(--bg)', color: 'var(--text)', border: '2px solid var(--bg)',
              padding: '0.9rem 2.5rem', fontFamily: 'var(--font-cairo)', fontWeight: 700,
              fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--bg)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--bg)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
          >
            💬 {t('Order on WhatsApp', 'اطلب على واتساب')}
          </a>
          <a href="#products" style={{
            background: 'transparent', color: 'var(--bg)', border: '2px solid rgba(255,255,255,0.3)',
            padding: '0.9rem 2.5rem', fontFamily: 'var(--font-cairo)', fontWeight: 700,
            fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block',
          }}>
            {t('Browse Figures', 'اتفرج على الفيجورات')}
          </a>
        </div>
      </div>
    </section>
  )
}

export function WhatsAppFloat() {
  return (
    <>
      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحبا S2H! عايز أطلب فيجور 👋')}`}
        target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 999,
          background: '#25D366', width: '52px', height: '52px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)', textDecoration: 'none',
          fontSize: '1.5rem',
        }}
        className="wa-float"
      >
        💬
        <span className="wa-pulse" />
      </a>
      <style>{`
        .wa-float { transition: transform 0.2s; }
        .wa-float:hover { transform: scale(1.1); }
        .wa-pulse {
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid #25D366;
          animation: waPulse 2s ease-out infinite;
        }
        @keyframes waPulse {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 768px) {
          .wa-float { bottom: 5rem; }
        }
      `}</style>
    </>
  )
}
