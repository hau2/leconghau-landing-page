/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useToggleTheme() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const resolvedTheme =
    theme === 'system' ? systemTheme : theme

  const toggle = () => {
    if (!resolvedTheme) return
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return {
    mounted,
    theme: resolvedTheme,
    toggle,
    setTheme, // optional nếu muốn set trực tiếp
  }
}
