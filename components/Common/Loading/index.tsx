import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.scss'

export default function Loading() {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)

  const handleStart = () => {
    setLoading(true)
  }
  const handleComplete = () => {
    setLoading(false)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.events])

  return isLoading ? (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null
}
