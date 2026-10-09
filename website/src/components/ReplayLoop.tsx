'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { PhoneFrame } from '@/components/PhoneFrame'

/* The replay, moving: eleven frames of one recorded rally (public/screens/replay-sprite.png, replay-sprite.json) stepped at 1.6 fps.
   The strip's orientation is read from the image itself; with reduced motion, or until the sprite has loaded, the still replay.png shows. */
const SPRITE = { src: '/screens/replay-sprite.png', poster: '/screens/replay.png', frames: 11, fps: 1.6 }

export function ReplayLoop({ className, alt = 'Rallymetrica rally replay animating the recorded shots of a point' }: { className?: string; alt?: string }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState<'row' | 'column' | null>(null)
  const [visible, setVisible] = useState(false)
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const image = new Image()
    image.onload = () => setLayout(image.naturalWidth > image.naturalHeight ? 'row' : 'column')
    image.src = SPRITE.src
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') { setVisible(true); return }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .2 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || !layout || !visible) return
    const id = window.setInterval(() => setFrame(current => (current + 1) % SPRITE.frames), 1000 / SPRITE.fps)
    return () => window.clearInterval(id)
  }, [reduced, layout, visible])

  const animated = !reduced && layout !== null
  const offset = `${(frame / (SPRITE.frames - 1)) * 100}%`
  const style: React.CSSProperties = animated
    ? { aspectRatio: '393 / 759', backgroundImage: `url(${SPRITE.src})`, backgroundRepeat: 'no-repeat', backgroundSize: layout === 'row' ? `${SPRITE.frames * 100}% 100%` : `100% ${SPRITE.frames * 100}%`, backgroundPosition: layout === 'row' ? `${offset} 0` : `0 ${offset}` }
    : { aspectRatio: '393 / 759', backgroundImage: `url(${SPRITE.poster})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }

  return <PhoneFrame className={className}><div ref={ref} role="img" aria-label={alt} style={style} /></PhoneFrame>
}
