import type { PropsWithChildren } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  delayMs = 0,
  className = '',
}: PropsWithChildren<{
  delayMs?: number
  className?: string
}>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  const options = useMemo(
    () => ({
      root: null,
      // Trigger a bit before the element is fully visible.
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
    }),
    [],
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return (
    <div
      ref={ref}
      className={`hs-reveal ${inView ? 'hs-reveal--in' : ''} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

