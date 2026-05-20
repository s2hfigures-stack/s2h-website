import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '2rem' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-cairo)', fontSize: 'clamp(6rem, 20vw, 12rem)', fontWeight: 900, lineHeight: 1, color: 'var(--border)', marginBottom: '-1rem' }}>404</div>
        <h1 style={{ fontFamily: 'var(--font-cairo)', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--text)', marginBottom: '1rem' }}>
          الصفحة دي مش موجودة
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontFamily: 'var(--font-cairo)' }}>
          Page not found — يلا نرجع البيت
        </p>
        <Link href="/" className="btn-primary">Back to Home / الرئيسية</Link>
      </div>
    </main>
  )
}
