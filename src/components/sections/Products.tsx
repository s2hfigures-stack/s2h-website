'use client'

import { useApp } from '@/context/AppContext'
import { PRODUCTS, HOT_PRODUCTS, SITE } from '@/lib/data'
import { useAOS } from '@/lib/useAOS'
import { Toast, useToast } from '@/components/ui/Toast'

function TiltCard({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`
  }
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)'
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 0.15s ease', ...style }}
    >
      {children}
    </div>
  )
}

export default function Products() {
  const { t, theme } = useApp()
  const { visible, message, show } = useToast()
  useAOS()

  const placeholderBg = theme === 'dark' ? '#2a2a2a' : '#f0f0f0'

  const buildMsg = (p: typeof PRODUCTS[0]) => {
    const msg = encodeURIComponent(`مرحبا S2H! 👋\nعايز أطلب فيجور: ${p.name}\nالسعر: ${p.price} جنيه\nالحجم: ${p.size}\n\nاسمي: \nعنواني: `)
    return `https://wa.me/${SITE.whatsapp}?text=${msg}`
  }

  const handleOrder = (p: typeof PRODUCTS[0]) => {
    show(t('Opening WhatsApp...', 'بيفتح واتساب...'))
    setTimeout(() => window.open(buildMsg(p), '_blank'), 400)
  }

  return (
    <section id="products" style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem', background: 'var(--bg-secondary)' }}>
      <Toast visible={visible} message={message} />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            // {t('Our Collection', 'الكولكشن بتاعنا')}
          </div>
          <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
            {t('Pick Your Figure', 'اختار فيجورك')}
          </h2>
        </div>

        {/* Most Popular */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }} data-aos>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              // {t('Most Popular', 'الأكثر مبيعاً')}
            </div>
            <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--text)' }}>
              🔥 {t('Fan Favourites', 'الأكثر طلباً')}
            </h3>
          </div>

          <div className="hot-grid">
            {HOT_PRODUCTS.map((p, i) => (
              <TiltCard key={p.id} style={{ background: 'var(--bg)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative', borderBottom: '3px solid var(--text)' }}>
                <div data-aos data-aos-delay={String(i * 80)} style={{ display: 'contents' }}>
                  <div style={{ width: '100%', aspectRatio: '1', background: placeholderBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', border: '1px solid var(--border)', maxHeight: '180px' }}>
                    {p.emoji}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      {t(p.series, p.seriesAr)}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'var(--text)' }}>
                      {t(p.name, p.nameAr)}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--text)' }}>
                      {p.price} {t('EGP', 'ج')}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)' }}>{p.size}</span>
                  </div>
                  <button onClick={() => handleOrder(p)} className="btn-primary"
                    style={{ textAlign: 'center', padding: '0.7rem 1rem', fontSize: '0.8rem', border: 'none', width: '100%', cursor: 'pointer' }}>
                    {t('Order', 'اطلب')} 💬
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }} data-aos>
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', background: 'var(--border)' }} />
          <span style={{ position: 'relative', background: 'var(--bg-secondary)', padding: '0 1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            // {t('Full Collection', 'الكولكشن الكامل')}
          </span>
        </div>

        {/* Full grid */}
        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <TiltCard key={p.id} style={{ background: 'var(--bg)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}>
              <div data-aos data-aos-delay={String((i % 5) * 60)} style={{ display: 'contents' }}>
                {p.hot && (
                  <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '1px', textTransform: 'uppercase', background: 'var(--text)', color: 'var(--bg)', padding: '0.15rem 0.4rem' }}>
                    🔥 {t('HOT', 'هوت')}
                  </div>
                )}
                <div style={{ width: '100%', aspectRatio: '1', background: placeholderBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', border: '1px solid var(--border)', maxHeight: '160px' }}>
                  {p.emoji}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    {t(p.series, p.seriesAr)}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'var(--text)' }}>
                    {t(p.name, p.nameAr)}
                  </h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: 'var(--text)' }}>
                    {p.price} {t('EGP', 'ج')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)' }}>{p.size}</span>
                </div>
                <button onClick={() => handleOrder(p)} className="btn-primary"
                  style={{ textAlign: 'center', padding: '0.65rem 1rem', fontSize: '0.78rem', marginTop: 'auto', border: 'none', width: '100%', cursor: 'pointer' }}>
                  {t('Order', 'اطلب')} 💬
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontFamily: 'var(--font-cairo)', fontSize: '0.82rem', color: 'var(--text-muted)' }} data-aos>
          {t('Custom sizes available · Cash on delivery all over Egypt', 'أحجام مخصصة بناء على الطلب · دفع عند الاستلام في كل مصر')}
        </p>
      </div>
    </section>
  )
}
