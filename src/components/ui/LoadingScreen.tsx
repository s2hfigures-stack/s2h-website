'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'

export default function LoadingScreen() {
  const { theme } = useApp()
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1800)
    const timer2 = setTimeout(() => setVisible(false), 2400)
    return () => { clearTimeout(timer1); clearTimeout(timer2) }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      <div style={{
        width: '80px', height: '80px', position: 'relative',
        filter: theme === 'light' ? 'invert(0)' : 'invert(1)',
        animation: 'loaderPulse 1s ease-in-out infinite alternate',
      }}>
        <Image src="/images/logo.png" alt="S2H" fill style={{ objectFit: 'contain' }} />
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        letterSpacing: '4px', textTransform: 'uppercase',
        color: 'var(--text-muted)',
        animation: 'loaderFade 0.8s ease-in-out infinite alternate',
      }}>
        From Screen to Reality
      </div>

      {/* Progress bar */}
      <div style={{
        width: '120px', height: '1px',
        background: 'var(--border)', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, height: '100%',
          background: 'var(--text)',
          animation: 'loaderBar 1.8s ease forwards',
        }} />
      </div>

      <style>{`
        @keyframes loaderPulse {
          from { transform: scale(0.95); opacity: 0.8; }
          to   { transform: scale(1.05); opacity: 1; }
        }
        @keyframes loaderFade {
          from { opacity: 0.4; }
          to   { opacity: 1; }
        }
        @keyframes loaderBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
