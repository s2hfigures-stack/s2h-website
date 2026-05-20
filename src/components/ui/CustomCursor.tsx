'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let x = 0, y = 0
    let rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const animate = () => {
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12

      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (ring.current) ring.current.style.transform += ' scale(1.8)'
      if (ring.current) ring.current.style.opacity = '0.5'
    }
    const onLeave = () => {
      if (ring.current) ring.current.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99999,
        width: '6px', height: '6px', borderRadius: '50%',
        background: 'var(--text)', pointerEvents: 'none',
        marginLeft: '-3px', marginTop: '-3px',
        transition: 'opacity 0.2s',
      }} />
      <div ref={ring} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99998,
        width: '32px', height: '32px', borderRadius: '50%',
        border: '1.5px solid var(--text)', pointerEvents: 'none',
        marginLeft: '-16px', marginTop: '-16px', opacity: 0.4,
        transition: 'opacity 0.3s, transform 0.1s',
      }} />
    </>
  )
}
