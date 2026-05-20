'use client'

import { useEffect } from 'react'

export function useAOS() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-aos]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Respect delay if set
            const delay = (entry.target as HTMLElement).dataset.aosDelay
            if (delay) {
              setTimeout(() => entry.target.classList.add('aos-animate'), parseInt(delay))
            } else {
              entry.target.classList.add('aos-animate')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
