import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export default function AntigravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return

    const context = canvasEl.getContext('2d')
    if (!context) return

    // Help TypeScript understand these stay non-null in closures.
    const canvas: HTMLCanvasElement = canvasEl
    const ctx: CanvasRenderingContext2D = context

    let raf = 0
    const particles: Particle[] = []

    const pointer = {
      x: 0,
      y: 0,
      active: false,
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    function resize() {
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2)
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const targetCount = Math.floor((w * h) / 22000)
      while (particles.length < targetCount) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1 + Math.random() * 2.2,
        })
      }
      while (particles.length > targetCount) particles.pop()
    }

    function onMove(e: PointerEvent) {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }
    function onLeave() {
      pointer.active = false
    }

    function step() {
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)

      // subtle red glow + black
      const grad = ctx.createRadialGradient(
        w * 0.2,
        h * -0.1,
        0,
        w * 0.2,
        h * -0.1,
        Math.max(w, h),
      )
      grad.addColorStop(0, 'rgba(255, 31, 31, 0.08)')
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      const repelRadius = 190
      const repelStrength = 4200
      const antiGravity = -0.012 // float upward
      const friction = 0.985

      for (const p of particles) {
        if (pointer.active && !prefersReducedMotion) {
          const dx = p.x - pointer.x
          const dy = p.y - pointer.y
          const d2 = dx * dx + dy * dy
          if (d2 < repelRadius * repelRadius && d2 > 0.001) {
            const d = Math.sqrt(d2)
            const f = (repelStrength / (d2 + 80)) * (1 - d / repelRadius)
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }
        }

        if (!prefersReducedMotion) p.vy += antiGravity

        p.vx *= friction
        p.vy *= friction
        p.x += p.vx
        p.y += p.vy

        // wrap edges
        if (p.x < -30) p.x = w + 30
        if (p.x > w + 30) p.x = -30
        if (p.y < -30) p.y = h + 30
        if (p.y > h + 30) p.y = -30

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 60, 60, 0.38)'
        ctx.fill()
      }

      // connect nearby points
      if (!prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i]
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const d2 = dx * dx + dy * dy
            if (d2 < 120 * 120) {
              const alpha = 1 - d2 / (120 * 120)
              ctx.strokeStyle = `rgba(255, 31, 31, ${alpha * 0.12})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
      }

      raf = window.requestAnimationFrame(step)
    }

    resize()
    raf = window.requestAnimationFrame(step)

    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave, { passive: true })

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg" aria-hidden="true" />
}

