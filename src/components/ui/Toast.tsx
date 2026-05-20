'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <div style={{
      position: 'fixed', bottom: '5rem', left: '50%',
      transform: `translateX(-50%) translateY(${visible ? '0' : '20px'})`,
      zIndex: 9999,
      background: 'var(--text)', color: 'var(--bg)',
      padding: '0.7rem 1.5rem',
      fontFamily: 'var(--font-cairo)', fontSize: '0.85rem', fontWeight: 600,
      opacity: visible ? 1 : 0,
      transition: 'all 0.3s ease',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
    }}>
      {message}
    </div>
  )
}

export function useToast() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')

  const show = (msg: string) => {
    setMessage(msg)
    setVisible(true)
    setTimeout(() => setVisible(false), 2500)
  }

  return { visible, message, show }
}
