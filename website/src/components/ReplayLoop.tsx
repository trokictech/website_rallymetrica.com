'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { PhoneFrame } from '@/components/PhoneFrame'

/* The replay, moving: eleven frames of one recorded rally (public/screens/replay-sprite.png and its light twin replay-sprite-light.png, replay-sprite.json) stepped at 1.6 fps.
   Both strips are drawn; CSS under html[data-theme] shows the theme's one (theme-dark-only · theme-light-only — the same rule AppScreenshot's stills use), so the replay is never a dark phone on a light page (owner, Oct 19).
   The strip's orientation is read from the image itself; with reduced motion, or until the sprite has loaded, the still replay.png / replay-light.png shows. Frames are 402 × 812 — the iPhone 17 Pro's points with the status bar off, as the site's other pictures. */
const SPRITE = { src: '/screens/replay-sprite.png', poster: '/screens/replay.png', frames: 11, fps: 1.6 }
const SPRITE_LIGHT = { src: '/screens/replay-sprite-light.png', poster: '/screens/replay-light.png' }

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
  const styleFor = (src: string, poster: string): React.CSSProperties => animated
    ? { aspectRatio: '402 / 812', backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat', backgroundSize: layout === 'row' ? `${SPRITE.frames * 100}% 100%` : `100% ${SPRITE.frames * 100}%`, backgroundPosition: layout === 'row' ? `${offset} 0` : `0 ${offset}` }
    : { aspectRatio: '402 / 812', backgroundImage: `url(${poster})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }

  return <PhoneFrame className={className}><div ref={ref} role="img" aria-label={alt}><div aria-hidden="true" className="theme-dark-only" style={styleFor(SPRITE.src, SPRITE.poster)} /><div aria-hidden="true" className="theme-light-only" style={styleFor(SPRITE_LIGHT.src, SPRITE_LIGHT.poster)} /></div></PhoneFrame>
}
