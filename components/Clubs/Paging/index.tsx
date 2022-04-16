import { ReactNode, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useSwiper } from 'swiper/react'

import Minus from './Minus'
import Current from './Current'
import Plus from './Plus'
import { useRouter } from 'next/router'

interface ChildProps {
  currentIndex: number
  handleNext(): void
  handlePrev(): void
}

interface Props {
  initialIndex: number
  clubLength: number
  children: (props: ChildProps) => ReactNode
}

const Paging = ({ initialIndex, clubLength, children }: Props) => {
  const initRef = useRef(true)
  const swiper = useSwiper()
  const {
    query: { category, clubId },
  } = useRouter()
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handleNext = () => {
    if (currentIndex >= clubLength - 1) return

    swiper.slideNext()
    setCurrentIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (currentIndex <= 0) return

    swiper.slidePrev()
    setCurrentIndex((prev) => prev - 1)
  }

  useEffect(() => {
    if (clubId || initRef.current) {
      initRef.current = false
      return
    }

    setCurrentIndex(0)
    swiper.slideTo(0)
  }, [clubId, category, swiper])

  useEffect(() => {
    setCurrentIndex(swiper.realIndex)
  }, [swiper.realIndex])

  return <SPaging>{children({ currentIndex, handleNext, handlePrev })}</SPaging>
}

Paging.Minus = Minus
Paging.Current = Current
Paging.Plus = Plus

export default Paging

const SPaging = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`
