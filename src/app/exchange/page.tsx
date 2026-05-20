'use client'

import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/sections/Sections'
import { useApp } from '@/context/AppContext'
import { useAOS } from '@/lib/useAOS'
import { SITE } from '@/lib/data'

const policies = [
  {
    icon: '✅',
    en: 'We Accept Exchange If',
    ar: 'بنقبل الاستبدال لو',
    color: '#22c55e',
    items: [
      { en: 'The figure arrived damaged or broken during delivery', ar: 'الفيجور وصل متكسر أو اتضرر خلال التوصيل' },
      { en: 'The figure has a clear print defect (not matching the preview)', ar: 'في عيب واضح في الطبعة ومش زي البريفيو' },
      { en: 'Wrong item was delivered', ar: 'اتبعتلك حاجة غلط' },
      { en: 'Request submitted within 48 hours of receiving the order', ar: 'الطلب اتقدم خلال 48 ساعة من استلام الأوردر' },
    ],
  },
  {
    icon: '❌',
    en: 'We Do Not Accept Exchange If',
    ar: 'مش بنقبل الاستبدال لو',
    color: '#ef4444',
    items: [
      { en: 'The figure was damaged after delivery due to mishandling', ar: 'الفيجور اتكسر بعد التوصيل بسبب التعامل الغلط' },
      { en: 'Customer changed their mind after printing', ar: 'الكاستومر غير رأيه بعد الطبع' },
      { en: 'The item was used, painted or modified by the customer', ar: 'الحاجة اتبعت أو اتلونت أو اتعدل عليها' },
      { en: 'More than 48 hours have passed since delivery', ar: 'عدت أكتر من 48 ساعة من التوصيل' },
      { en: 'Custom orders with approved preview', ar: 'أوردرات مخصصة تم الموافقة على البريفيو' },
    ],
  },
]

const steps = [
  {
    num: '01',
    en: 'Contact us on WhatsApp',
    ar: 'تواصل معانا على واتساب',
    descEn: 'Message us within 48 hours of receiving your order. Include your order details and photos of the issue.',
    descAr: 'ابعتلنا رسالة خلال 48 ساعة من استلام الأوردر. حط تفاصيل الأوردر وصور للمشكلة.',
  },
  {
    num: '02',
    en: 'We Review Your Case',
    ar: 'بنراجع حالتك',
    descEn: 'Our team will review the photos and details within 24 hours and get back to you with a decision.',
    descAr: 'الفريق بتاعنا هيراجع الصور والتفاصيل خلال 24 ساعة ويرد عليك بقرار.',
  },
  {
    num: '03',
    en: 'We Reprint & Redeliver',
    ar: 'بنعيد الطبع والتوصيل',
    descEn: 'If approved, we reprint your figure and deliver it to you at no extra cost.',
    descAr: 'لو اتوافق، بنعيد طبع الفيجور ونوصله ليك من غير أي تكلفة زيادة.',
  },
]

export default function ExchangePage() {
  const { t, theme } = useApp()
  useAOS()

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
            // {t('Customer Protection', 'حماية العميل')}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cairo)', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1,
            color: 'var(--text)', marginBottom: '1.2rem', letterSpacing: '-1px',
            animation: 'fadeUp 0.6s ease 0.2s both',
          }}>
            {t('Exchange &', 'الاستبدال')}
            <br />
            <span style={{ WebkitTextStroke: '2px var(--text)', color: 'transparent' }}>
              {t('Refund Policy', 'وسياسة الإرجاع')}
            </span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-cairo)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.8,
            margin: '0 auto', animation: 'fadeUp 0.6s ease 0.3s both',
          }}>
            {t(
              'Your satisfaction is our priority. We stand behind every figure we print.',
              'رضاك هو أولويتنا. بنقف وراء كل فيجور بنطبعه.'
            )}
          </p>
        </section>

        {/* Policy cards */}
        <section style={{ padding: 'clamp(2rem,4vw,4rem) 1.5rem', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {policies.map((policy, pi) => (
              <div key={pi} data-aos data-aos-delay={String(pi * 100)}
                style={{ background: 'var(--bg)', border: `1px solid var(--border)`, borderTop: `3px solid ${policy.color}`, padding: '2rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{policy.icon}</div>
                <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: '1rem', color: 'var(--text)', marginBottom: '1.2rem' }}>
                  {t(policy.en, policy.ar)}
                </h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {policy.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: policy.color, flexShrink: 0, marginTop: '0.1rem' }}>
                        {pi === 0 ? '✓' : '✗'}
                      </span>
                      <span style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        {t(item.en, item.ar)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How to request */}
        <section style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                // {t('How to Request', 'إزاي تطلب')}
              </div>
              <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
                {t('Exchange Process', 'خطوات الاستبدال')}
              </h2>
            </div>

            {steps.map((step, i) => (
              <div key={i} data-aos data-aos-delay={String(i * 100)}
                style={{ display: 'flex', gap: '2rem', padding: '2rem 0', borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', lineHeight: 1, color: 'var(--border)', flexShrink: 0, width: '60px' }}>
                  {step.num}
                </div>
                <div style={{ paddingTop: '0.3rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.4rem' }}>
                    {t(step.en, step.ar)}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {t(step.descEn, step.descAr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important notes */}
        <section style={{ padding: 'clamp(2rem,4vw,4rem) 1.5rem', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }} data-aos>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              // {t('Important Notes', 'ملاحظات مهمة')}
            </div>
            {[
              { en: 'All figures are custom made to order. We do not hold stock, so cancellations after print confirmation are not accepted.', ar: 'كل الفيجورات بتتعمل على أوردر. مش بنعمل مخزون، فإلغاء الطلب بعد تأكيد الطبع مش مقبول.' },
              { en: 'Cash on delivery orders that are refused by the customer without a valid reason may affect future order eligibility.', ar: 'أوردرات الكاش عند الاستلام اللي الكاستومر رفضها من غير سبب منطقي ممكن تأثر على الأوردرات الجاية.' },
              { en: 'Photos and videos of the damage must be provided at the time of the exchange request.', ar: 'صور وفيديوهات للضرر لازم تتقدم وقت طلب الاستبدال.' },
              { en: 'S2H reserves the right to assess each case individually.', ar: 'S2H عندها الحق تقيم كل حالة على حدة.' },
            ].map((note, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>→</span>
                <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {t(note.en, note.ar)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(3rem,6vw,5rem) 1.5rem', background: 'var(--text)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--bg)', lineHeight: 1, marginBottom: '1rem' }}>
            {t('Have an Issue?', 'عندك مشكلة؟')}
          </h2>
          <p style={{ fontFamily: 'var(--font-cairo)', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            {t('Contact us directly on WhatsApp and we\'ll sort it out.', 'تواصل معانا مباشرة على واتساب وهنحلها.')}
          </p>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحبا S2H، عندي مشكلة في أوردر 🙏')}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              background: 'var(--bg)', color: 'var(--text)', border: '2px solid var(--bg)',
              padding: '1rem 3rem', fontFamily: 'var(--font-cairo)', fontWeight: 700,
              fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block',
            }}>
            💬 {t('Contact Us', 'تواصل معانا')}
          </a>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
