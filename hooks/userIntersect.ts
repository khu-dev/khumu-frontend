import { useCallback, useEffect, useRef, useState } from 'react'

const DEFAULT_THRESHOLD = 0.6

export const useIntersect = (callback?: Function) => {
  const ref = useRef(null)
  const [showed, setShowed] = useState(false)

  const handleScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      const currentRatio = entry.intersectionRatio

      if (!showed && currentRatio > 0) {
        setShowed(true)
        callback?.()
      }
    },
    [showed, callback],
  )

  useEffect(() => {
    const { current } = ref
    let observer: any = null

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: DEFAULT_THRESHOLD,
      })
      observer.observe(current)
    }

    return () => observer?.disconnect()
  }, [handleScroll])

  return { ref, showed }
}
