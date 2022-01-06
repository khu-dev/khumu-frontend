import { useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  threshold?: number
  callback?(): void
}

export const useIntersect = ({ threshold = 0.6, callback }: Props) => {
  const ref = useRef(null)
  const [showed, setShowed] = useState(false)

  const handleScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      const currentRatio = entry.intersectionRatio

      // Scrolling down/up
      !showed &&
        currentRatio > 0 &&
        (() => {
          setShowed(true)
          callback?.()
        })()
    },
    [showed, callback],
  )

  useEffect(() => {
    const { current } = ref
    let observer: any = null

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold })
      observer.observe(current)
    }

    return () => observer?.disconnect()
  }, [handleScroll, threshold])

  return { ref, showed }
}
