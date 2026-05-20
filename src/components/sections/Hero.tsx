'use client'

import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import { SITE } from '@/lib/data'
import { useAOS } from '@/lib/useAOS'
import { useCounter } from '@/lib/useCounter'

function StatCounter({ num, suffix, label }: { num: string, suffix: string, label: string }) {
  const isNumber = !isNaN(Number(num))
  const { count, ref } = useCounter(isNumber ? Number(num) : 0)

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text)', lineHeight: 1 }}>
        {isNumber ? count : num}{suffix}
      </div>
      <div style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t, theme } = useApp()
  useAOS()

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: 'clamp(6rem, 10vw, 9rem) 1.5rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Noise texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat', backgroundSize: '128px',
        pointerEvents: 'none',
      }} />

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none',
      }} />

      {/* Logo with animation */}
      <div style={{
        width: 'clamp(70px, 10vw, 100px)', height: 'clamp(70px, 10vw, 100px)',
        position: 'relative', marginBottom: '2rem',
        filter: theme === 'light' ? 'invert(0)' : 'invert(1)',
        animation: 'logoReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}>
        <Image src="/images/logo.png" alt="S2H" fill style={{ objectFit: 'contain' }} />
      </div>

      {/* Tag */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px',
        textTransform: 'uppercase', color: 'var(--text-muted)',
        border: '1px solid var(--border)', padding: '0.35rem 0.9rem', marginBottom: '1.8rem',
        animation: 'fadeUp 0.6s ease 0.2s both',
      }}>
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--text)', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
        {SITE.location} · {SITE.established}
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: 'var(--font-cairo)', fontWeight: 900,
        fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', lineHeight: 1,
        color: 'var(--text)', marginBottom: '1.2rem', letterSpacing: '-1px',
        animation: 'fadeUp 0.6s ease 0.3s both',
      }}>
        {t('From Screen', 'من الشاشة')}
        <br />
        <span style={{ WebkitTextStroke: '2px var(--text)', color: 'transparent' }}>
          {t('to Reality', 'للحقيقة')}
        </span>
      </h1>

      {/* Sub */}
      <p style={{
        fontFamily: 'var(--font-cairo)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
        color: 'var(--text-muted)', maxWidth: '480px', lineHeight: 1.8,
        marginBottom: '2.5rem', fontWeight: 400,
        animation: 'fadeUp 0.6s ease 0.4s both',
      }}>
        {t(
          'Custom 3D figures of your favourite characters. Anime, Marvel, Football icons & more — delivered anywhere in Egypt.',
          'فيجورات ثلاثية الأبعاد لشخصياتك المفضلة. أنيمي، مارفيل، نجوم الكورة والمزيد — بنوصل لكل مصر.'
        )}
      </p>

      {/* CTAs */}
      <div className="hero-btns" style={{ animation: 'fadeUp 0.6s ease 0.5s both' }}>
        <a href="#products" className="btn-primary">{t('Shop Figures', 'اتفرج على الفيجورات')}</a>
        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
          {t('WhatsApp Us', 'كلمنا على واتساب')}
        </a>
      </div>

      {/* Cover image */}
      <div style={{
        width: '100%', maxWidth: '860px', margin: '3rem auto 0',
        border: '1px solid var(--border)', overflow: 'hidden',
        animation: 'fadeUp 0.6s ease 0.6s both',
      }}>
        <Image src="/images/cover.png" alt="S2H From Screen to Reality"
          width={1456} height={816} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
      </div>

      {/* Stats with counter */}
      <div className="stats-row" style={{
        marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)',
        animation: 'fadeUp 0.6s ease 0.7s both',
      }}>
        <StatCounter num="10" suffix="" label={t('Figures at launch', 'فيجور في اللانش')} />
        <StatCounter num="500" suffix="" label={t('EGP per figure', 'جنيه للفيجور')} />
        <StatCounter num="100" suffix="%" label={t('Cash on delivery', 'دفع عند الاستلام')} />
      </div>

      <style>{`
        @keyframes logoReveal {
          from { opacity: 0; transform: scale(0.7) rotate(-10deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </section>
  )
}
