"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

const CounterAnimation = ({ end, duration = 2000, suffix = "", className = "" }: CounterAnimationProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    countRef.current = 0
    const step = Math.ceil(end / (duration / 16))
    let animationFrameId: number

    const updateCount = () => {
      if (countRef.current < end) {
        const nextCount = Math.min(countRef.current + step, end)
        countRef.current = nextCount
        setCount(nextCount)
        animationFrameId = requestAnimationFrame(updateCount)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, inView])

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  )
}

export default CounterAnimation

