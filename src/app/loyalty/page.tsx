'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/sections/Sections'
import { useApp } from '@/context/AppContext'
import { useAOS } from '@/lib/useAOS'
import { SITE } from '@/lib/data'

const tiers = [
  {
    points: 1000,
    icon: '⭐',
    en: 'Silver Fan',
    ar: 'فان فضي',
    rewardEn: '5% off your next order',
    rewardAr: 'خصم 5% على أوردرك الجاي',
    color: '#94a3b8',
  },
  {
    points: 5000,
    icon: '🌟',
    en: 'Gold Collector',
    ar: 'كولكتور ذهبي',
    rewardEn: '10% off your next order',
    rewardAr: 'خصم 10% على أوردرك الجاي',
    color: '#f59e0b',
  },
  {
    points: 7000,
    icon: '💎',
    en: 'Diamond Member',
    ar: 'عضو ماسي',
    rewardEn: 'Free delivery on your next order',
    rewardAr: 'توصيل مجاني على أوردرك الجاي',
    color: '#818cf8',
  },
  {
    points: 10000,
    icon: '👑',
    en: 'Legend',
    ar: 'أسطورة',
    rewardEn: 'Free figure (up to 500 EGP) or voucher code',
    rewardAr: 'فيجور مجاني (لحد 500 جنيه) أو كود خصم',
    color: '#f43f5e',
  },
]

const faqs = [
  {
    q: { en: 'How do I earn points?', ar: 'إزاي بكسب نقاط؟' },
    a: { en: 'Every 1 EGP you spend = 1 point. So if you order a 500 EGP figure, you earn 500 points automatically.', ar: 'كل جنيه بتصرفه = نقطة واحدة. يعني لو اشتريت فيجور بـ500 جنيه، بتكسب 500 نقطة أوتوماتيك.' },
  },
  {
    q: { en: 'How do I track my points?', ar: 'إزاي بتابع نقاطي؟' },
    a: { en: 'After each order, we send you your updated points balance on WhatsApp. You can also ask us anytime.', ar: 'بعد كل أوردر، بنبعتلك رصيد نقاطك المحدث على واتساب. وممكن تسألنا في أي وقت.' },
  },
  {
    q: { en: 'Do points expire?', ar: 'هل النقاط بتنتهي؟' },
    a: { en: 'Points are valid for 12 months from the date they were earned. Stay active to keep them!', ar: 'النقاط صالحة لمدة 12 شهر من تاريخ كسبها. فضل نشيط عشان تحتفظ بيها!' },
  },
  {
    q: { en: 'Can I redeem points on any order?', ar: 'ممكن أستخدم النقاط على أي أوردر؟' },
    a: { en: 'Yes! Once you reach a tier, just mention it when ordering on WhatsApp and we\'ll apply your reward.', ar: 'أيوه! لما توصل لتير معين، قول كده لما بتطلب على واتساب وهنطبق المكافأة بتاعتك.' },
  },
  {
    q: { en: 'Can I combine rewards?', ar: 'ممكن أجمع المكافآت؟' },
    a: { en: 'One reward per order. You can save your points and redeem at the highest tier for maximum value.', ar: 'مكافأة واحدة لكل أوردر. ممكن تحتفظ بنقاطك وتصرفها في أعلى تير للحصول على أقصى قيمة.' },
  },
]

export default function LoyaltyPage() {
  const { t, theme } = useApp()
  useAOS()
  const [spend, setSpend] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const points = Math.floor(Number(spend) || 0)
  const currentTier = [...tiers].reverse().find(tier => points >= tier.points)
  const nextTier = tiers.find(tier => points < tier.points)
  const progress = nextTier
    ? Math.min((points / nextTier.points) * 100, 100)
    : 100

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{
          padding: 'clamp(6rem,10vw,9rem) 1.5rem 4rem',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
            backgroundSize: '40px 40px', pointerEvents: 'none',
          }} />

          <div style={{
            width: 'clamp(60px, 8vw, 90px)', height: 'clamp(60px, 8vw, 90px)',
            position: 'relative', margin: '0 auto 2rem',
            filter: theme === 'light' ? 'invert(0)' : 'invert(1)',
            animation: 'fadeUp 0.6s ease forwards',
          }}>
            <Image src="/images/logo.png" alt="S2H" fill style={{ objectFit: 'contain' }} />
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px',
            textTransform: 'uppercase', color: 'var(--text-muted)',
            border: '1px solid var(--border)', padding: '0.35rem 0.9rem',
            display: 'inline-block', marginBottom: '1.5rem',
            animation: 'fadeUp 0.6s ease 0.1s both',
          }}>
            // {t('Rewards Program', 'برنامج المكافآت')}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cairo)', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1,
            color: 'var(--text)', marginBottom: '1.2rem', letterSpacing: '-1px',
            animation: 'fadeUp 0.6s ease 0.2s both',
          }}>
            {t('Loyalty', 'نقاط')}
            <br />
            <span style={{ WebkitTextStroke: '2px var(--text)', color: 'transparent' }}>
              {t('Points', 'الولاء')}
            </span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-cairo)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            color: 'var(--text-muted)', maxWidth: '500px', lineHeight: 1.8,
            margin: '0 auto', animation: 'fadeUp 0.6s ease 0.3s both',
          }}>
            {t(
              'Every pound you spend earns you points. Collect enough and unlock free figures, discounts and more.',
              'كل جنيه بتصرفه بيكسبك نقاط. اجمع كفاية وافتح فيجورات مجانية وخصومات والمزيد.'
            )}
          </p>

          {/* How it works quick */}
          <div style={{
            display: 'inline-flex', gap: '2rem', marginTop: '3rem', padding: '1.5rem 2.5rem',
            border: '1px solid var(--border)', background: 'var(--bg-secondary)',
            flexWrap: 'wrap', justifyContent: 'center',
            animation: 'fadeUp 0.6s ease 0.4s both',
          }}>
            <div style={{ textAlign: 'center' }}>
             <div style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--text)' }}>1 {t('EGP', 'ج')}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('Spent', 'صرفت')}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1.2rem' }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--text)' }}>1</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('Point', 'نقطة')}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1.2rem' }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--text)' }}>🎁</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('Rewards', 'مكافآت')}</div>
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                // {t('Reward Tiers', 'مستويات المكافآت')}
              </div>
              <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
                {t('What You Can Unlock', 'اللي ممكن تفتحه')}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', border: '1px solid var(--border)', background: 'var(--border)' }}>
              {tiers.map((tier, i) => (
                <div key={i} data-aos data-aos-delay={String(i * 80)}
                  style={{
                    background: 'var(--bg)', padding: '2rem 1.5rem',
                    borderTop: `3px solid ${tier.color}`,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{tier.icon}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: tier.color, marginBottom: '0.3rem' }}>
                    {tier.points.toLocaleString()} {t('points', 'نقطة')}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>
                    {t(tier.en, tier.ar)}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    🎁 {t(tier.rewardEn, tier.rewardAr)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} data-aos>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                // {t('Points Calculator', 'حاسبة النقاط')}
              </div>
              <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
                {t('Calculate Your Points', 'احسب نقاطك')}
              </h2>
            </div>

            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: '2.5rem' }} data-aos>
              {/* Input */}
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.75rem' }}>
                {t('How much will you spend? (EGP)', 'هتصرف قد إيه؟ (جنيه)')}
              </label>
              <input
                type="number"
                value={spend}
                onChange={e => setSpend(e.target.value)}
                placeholder="500"
                style={{
                  width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                  color: 'var(--text)', padding: '0.85rem 1rem',
                  fontFamily: 'var(--font-cairo)', fontSize: '1.2rem', fontWeight: 700,
                  outline: 'none', marginBottom: '2rem',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--text)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />

              {/* Points display */}
              <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '1.5rem', background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {t('You will earn', 'هتكسب')}
                </div>
                <div style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--text)', lineHeight: 1 }}>
                  {points.toLocaleString()}
                </div>
                <div style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  {t('points', 'نقطة')}
                </div>
              </div>

              {/* Progress bar */}
              {nextTier && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                      {points.toLocaleString()} {t('pts', 'نقطة')}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                      {nextTier.points.toLocaleString()} {t('pts', 'نقطة')}
                    </span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', background: 'var(--text)',
                      width: `${progress}%`, borderRadius: '2px',
                      transition: 'width 0.5s ease',
                    }} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', textAlign: 'center' }}>
                    {t(
                      `${(nextTier.points - points).toLocaleString()} more points to reach ${nextTier.en}`,
                      `محتاج ${(nextTier.points - points).toLocaleString()} نقطة تانية للوصول لـ${nextTier.ar}`
                    )}
                  </p>
                </div>
              )}

              {/* Current reward */}
              {currentTier ? (
                <div style={{
                  padding: '1rem', background: 'var(--bg)',
                  border: `1px solid ${currentTier.color}`,
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{currentTier.icon}</div>
                  <div style={{ fontFamily: 'var(--font-cairo)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.3rem' }}>
                    {t('You unlocked', 'فتحت')} {t(currentTier.en, currentTier.ar)}!
                  </div>
                  <div style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    🎁 {t(currentTier.rewardEn, currentTier.rewardAr)}
                  </div>
                </div>
              ) : (
                <div style={{ padding: '1rem', background: 'var(--bg)', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {t('Start spending to earn points and unlock rewards!', 'ابدأ تصرف عشان تكسب نقاط وتفتح مكافآت!')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                // {t('FAQ', 'أسئلة شائعة')}
              </div>
              <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
                {t('Common Questions', 'أسئلة شائعة')}
              </h2>
            </div>

            {faqs.map((faq, i) => (
              <div key={i} data-aos
                style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', padding: '1.5rem 0', display: 'flex',
                    justifyContent: 'space-between', alignItems: 'center',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-cairo)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>
                    {t(faq.q.en, faq.q.ar)}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem', flexShrink: 0, marginLeft: '1rem', transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                      {t(faq.a.en, faq.a.ar)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(3rem,6vw,5rem) 1.5rem', background: 'var(--text)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--bg)', lineHeight: 1, marginBottom: '1rem' }}>
            {t('Start Earning Today', 'ابدأ تكسب النهارده')}
          </h2>
          <p style={{ fontFamily: 'var(--font-cairo)', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            {t('Order your first figure and start your points journey.', 'اطلب أول فيجور وابدأ رحلة نقاطك.')}
          </p>
          <a href="/#products" style={{
            background: 'var(--bg)', color: 'var(--text)', border: '2px solid var(--bg)',
            padding: '1rem 3rem', fontFamily: 'var(--font-cairo)', fontWeight: 700,
            fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block',
          }}>
            {t('Shop Now', 'اتسوق دلوقتي')} →
          </a>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
