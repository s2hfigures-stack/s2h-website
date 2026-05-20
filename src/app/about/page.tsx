'use client'

import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/sections/Sections'
import { useApp } from '@/context/AppContext'
import { useAOS } from '@/lib/useAOS'
import { SITE } from '@/lib/data'

const values = [
  {
    icon: '🎯',
    en: 'Obsessed with Detail',
    ar: 'مهووسين بالتفاصيل',
    descEn: 'Every layer, every millimeter matters. We don\'t ship anything we wouldn\'t display ourselves.',
    descAr: 'كل طبقة وكل مليمتر مهم. مش بنبعت حاجة مش هنحطها عندنا.',
  },
  {
    icon: '🤝',
    en: 'Built on Trust',
    ar: 'بنينا على الثقة',
    descEn: 'You see a preview before we print. No surprises, no excuses. Just your vision, delivered.',
    descAr: 'بتشوف البريفيو قبل ما نطبع. مش في مفاجآت. بس رؤيتك، بتتوصل.',
  },
  {
    icon: '🔥',
    en: 'Fan-First',
    ar: 'الفان أولاً',
    descEn: 'We\'re fans ourselves. We know what a real collector wants and we deliver exactly that.',
    descAr: 'إحنا نفسنا فانز. عارفين الكولكتور الحقيقي عايز إيه وبندي بالظبط كده.',
  },
  {
    icon: '🇪🇬',
    en: 'Proudly Egyptian',
    ar: 'مصريين بكل فخر',
    descEn: 'Made in Cairo. Delivered across Egypt. Supporting local craft and local dreams.',
    descAr: 'صنع في القاهرة. بنوصل لكل مصر. بندعم الصنعة المحلية والأحلام المحلية.',
  },
]

const timeline = [
  {
    year: '2024',
    en: 'The Idea',
    ar: 'الفكرة',
    descEn: 'Three friends sitting in Cairo, scrolling through figures online, frustrated that nothing quality existed locally at a fair price. That frustration became a plan.',
    descAr: 'صاحبين قاعدين في القاهرة بيتفرجوا على فيجورات أونلاين، زهقوا من إنه مفيش حاجة بجودة كويسة محلياً بسعر مناسب. الإحساس ده اتحول لخطة.',
  },
  {
    year: '2024',
    en: 'First Print',
    ar: 'أول طبعة',
    descEn: 'We invested everything into our first printer. The first figure came out rough. We fixed it. Then fixed it again. We didn\'t stop until it was right.',
    descAr: 'استثمرنا كل حاجة في أول برنتر. الفيجور الأول طلع خشن. صلحناه. وصلحناه تاني. ماوقفناش لحد ما بقى صح.',
  },
  {
    year: '2025',
    en: 'S2H is Born',
    ar: 'S2H اتولدت',
    descEn: 'Screen to Hand. The name said it all. Your favourite characters, printed in Egypt, delivered to your door. S2H officially launched.',
    descAr: 'من الشاشة للإيد. الاسم قال كل حاجة. شخصياتك المفضلة، متطبعة في مصر، بتتوصلك على بابك. S2H اتطلقت رسمياً.',
  },
  {
    year: '2025',
    en: 'Growing Strong',
    ar: 'بنكبر بقوة',
    descEn: 'New figures, new materials, new possibilities. The journey is just getting started and we\'re not slowing down.',
    descAr: 'فيجورات جديدة، مواد جديدة، إمكانيات جديدة. الرحلة بدأت للتو وإحنا مش بنبطأ.',
  },
]

export default function AboutPage() {
  const { t, theme } = useApp()
  useAOS()

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{
          minHeight: '70vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          padding: 'clamp(6rem,10vw,9rem) 1.5rem 4rem',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
            backgroundSize: '40px 40px', pointerEvents: 'none',
          }} />

          <div style={{
            width: 'clamp(60px, 8vw, 90px)', height: 'clamp(60px, 8vw, 90px)',
            position: 'relative', marginBottom: '2rem',
            filter: theme === 'light' ? 'invert(0)' : 'invert(1)',
            animation: 'fadeUp 0.6s ease forwards',
          }}>
            <Image src="/images/logo.png" alt="S2H" fill style={{ objectFit: 'contain' }} />
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px',
            textTransform: 'uppercase', color: 'var(--text-muted)',
            border: '1px solid var(--border)', padding: '0.35rem 0.9rem',
            marginBottom: '1.5rem', animation: 'fadeUp 0.6s ease 0.1s both',
          }}>
            // {t('Our Story', 'قصتنا')}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cairo)', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1,
            color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-1px',
            animation: 'fadeUp 0.6s ease 0.2s both',
          }}>
            {t('We Started as', 'بدأنا كـ')}
            <br />
            <span style={{ WebkitTextStroke: '2px var(--text)', color: 'transparent' }}>
              {t('Fans First', 'فانز أولاً')}
            </span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-cairo)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'var(--text-muted)', maxWidth: '580px', lineHeight: 1.8,
            animation: 'fadeUp 0.6s ease 0.3s both',
          }}>
            {t(
              'Three stubborn friends from Cairo who refused to accept that quality 3D figures weren\'t available in Egypt. So they built S2H.',
              'صاحبين عنيدين من القاهرة رفضوا يقبلوا إن فيجورات ثلاثية الأبعاد بجودة مش موجودة في مصر. فبنوا S2H.'
            )}
          </p>
        </section>

        {/* Cover */}
        <div style={{ padding: '0 1.5rem', maxWidth: '1000px', margin: '0 auto 4rem' }} data-aos>
          <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
            <Image src="/images/cover.png" alt="S2H" width={1456} height={816}
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>

        {/* Founders */}
        <section style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                // {t('The Founders', 'المؤسسين')}
              </div>
              <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
                {t('Meet the Team', 'تعرف على الفريق')}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1px', border: '1px solid var(--border)', background: 'var(--border)' }}>
              {[
  {
    name: 'Hossam',
    nameAr: 'حسام',
    initial: 'H',
    role: t('Co-Founder & Head of Production', 'مؤسس مشارك ورئيس الإنتاج'),
    descEn: 'The guy who wouldn\'t stop until the print was perfect. Hossam handles every figure like it\'s going into his own collection.',
    descAr: 'الراجل اللي مش بيوقف لحد ما الطبعة تبقى مثالية. حسام بيتعامل مع كل فيجور كأنه هيحطه في كولكشنه هو.',
  },
  {
    name: 'Sherif',
    nameAr: 'شريف',
    initial: 'S',
    role: t('Co-Founder & Head of Design', 'مؤسس مشارك ورئيس التصميم'),
    descEn: 'The creative brain behind every model. Sherif turns references into print-ready 3D files with obsessive attention to detail.',
    descAr: 'العقل الإبداعي وراء كل موديل. شريف بيحول المراجع لملفات ثلاثية الأبعاد جاهزة للطبع باهتمام مهووس بالتفاصيل.',
  },
  {
    name: 'H',
    nameAr: 'H',
    initial: 'H',
    role: t('Co-Founder & Head of Business', 'مؤسس مشارك ورئيس الأعمال'),
    descEn: 'The one who turns ideas into reality. H drives the vision, the brand and everything that makes S2H what it is.',
    descAr: 'اللي بيحول الأفكار لحقيقة. H بيقود الرؤية والبراند وكل حاجة بتخلي S2H هي اللي هي.',
  },
].map((f, i) => (
                <div key={f.name} data-aos data-aos-delay={String(i * 100)}
                  style={{ background: 'var(--bg)', padding: '2.5rem 2rem', textAlign: 'center' }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'var(--text)', color: 'var(--bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: '2rem',
                    margin: '0 auto 1.5rem',
                  }}>
                    {f.initial}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    {f.role}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--text)', marginBottom: '1rem' }}>
                    {t(f.name, f.nameAr)}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    {t(f.descEn, f.descAr)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                // {t('The Journey', 'الرحلة')}
              </div>
              <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
                {t('How It All Started', 'إزاي بدأت الحكاية')}
              </h2>
            </div>

            {timeline.map((item, i) => (
              <div key={i} data-aos data-aos-delay={String(i * 100)}
                style={{
                  display: 'flex', gap: '2rem',
                  padding: '2rem 0',
                  borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700,
                  color: 'var(--text-muted)', flexShrink: 0, width: '50px',
                  letterSpacing: '1px', paddingTop: '0.3rem',
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                    {t(item.en, item.ar)}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    {t(item.descEn, item.descAr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: 'clamp(3rem,6vw,6rem) 1.5rem', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                // {t('What We Stand For', 'اللي بنؤمن بيه')}
              </div>
              <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1 }}>
                {t('Our Values', 'قيمنا')}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', border: '1px solid var(--border)', background: 'var(--border)' }}>
              {values.map((v, i) => (
                <div key={v.en} data-aos data-aos-delay={String(i * 80)}
                  style={{ background: 'var(--bg)', padding: '2rem', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
                >
                  <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>{v.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                    {t(v.en, v.ar)}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {t(v.descEn, v.descAr)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(3rem,6vw,5rem) 1.5rem', background: 'var(--text)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', color: 'var(--bg)', lineHeight: 1, marginBottom: '1rem' }}>
            {t('Be Part of the Story', 'كن جزء من الحكاية')}
          </h2>
          <p style={{ fontFamily: 'var(--font-cairo)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
            {t('Order your first figure today.', 'اطلب أول فيجور ليك النهارده.')}
          </p>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
            style={{
              background: 'var(--bg)', color: 'var(--text)', border: '2px solid var(--bg)',
              padding: '1rem 3rem', fontFamily: 'var(--font-cairo)', fontWeight: 700,
              fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s',
            }}>
            💬 {t('Order Now', 'اطلب دلوقتي')}
          </a>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
