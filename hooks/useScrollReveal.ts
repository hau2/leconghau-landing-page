'use client'

import { useEffect } from 'react'

type Options = {
  selector?: string
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal({
  selector = '.group',
  threshold = 0.1,
  rootMargin = '0px',
}: Options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            obs.unobserve(entry.target) // 👈 giống HTML gốc
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [selector, threshold, rootMargin])
}
