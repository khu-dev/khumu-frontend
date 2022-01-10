import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IMG_URI } from '@config/baseURI'
import Card from './Card'
import Paging from './Paging'
import Categories from './Categories'

import * as s from './styled'
import { useRouter } from 'next/router'
import { Club } from '@interface/Club'
import { getFontSize } from '@utils/font'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react'

interface Props {
  categories: string[]
  clubs: Club[]
}

const Clubs = ({ categories, clubs }: Props) => {
  const {
    query: { currentId },
  } = useRouter()
  const initRef = useRef(true)
  const [category, setCategory] = useState('전체')
  const [size, setSize] = useState({
    translateX: 0,
    centerSlidePercentage: 100,
  })
  const filteredClubs: Club[] = clubs.filter((club) => {
    if (category === '전체') return true

    return club.categories!.includes(category)
  })

  const [current, setCurrent] = useState(0)
  const clubLength = filteredClubs.length

  const handleIndex = {
    minus: () => {
      current > 0 && setCurrent((prev) => (prev - 1) % clubLength)
    },
    plus: () => {
      current < clubLength - 1 && setCurrent((prev) => (prev + 1) % clubLength)
    },
  }

  const handleCategory = (selected: any) => {
    setCategory(selected)
    setCurrent(0)
  }

  useEffect(() => {
    if (!currentId || clubs.length === 0 || !initRef.current) return

    const currentClubIndex = clubs.findIndex(
      (club) => club.id === Number(currentId),
    )
    setCurrent(currentClubIndex > 0 ? currentClubIndex : 0)
    currentClubIndex !== -1 && (initRef.current = false)
  }, [currentId, clubs])

  useLayoutEffect(() => {
    if (!process.browser) return

    const _window = process.browser && (window as any)
    const innerWidth = _window?.innerWidth || 0
    const centerSlidePercentage = innerWidth > 500 ? 100 : 88
    const translateX = (100 - centerSlidePercentage) / 2

    setSize({
      translateX,
      centerSlidePercentage,
    })
  }, [])

  const { translateX, centerSlidePercentage } = size

  return (
    <>
      <Categories
        categories={['전체', ...categories]}
        category={category}
        handleCategory={handleCategory}
      />
      <s.ClubsCard
        css={(() => {
          switch (current) {
            case 0:
              return css`
                transform: translateX(${translateX}%);
              `
            case filteredClubs.length - 1:
              return css`
                transform: translateX(${-translateX}%);
              `
          }
        })()}
      >
        <Carousel
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          interval={999999}
          onChange={(idx: number) => setCurrent(idx)}
          selectedItem={current}
        >
          {filteredClubs?.map(
            (club, idx) =>
              club && (
                <Card key={club?.name + idx}>
                  <Card.Image url={`${IMG_URI}/${club?.images[0]}`} />
                  <Card.Content>
                    <Card.Tag tag={'연행'} />
                    <Card.Name
                      name={club?.name}
                      summary={club?.summary}
                      fontSize={getFontSize(club?.summary?.length)}
                    />
                    <Card.Description description={club?.description} />
                  </Card.Content>
                </Card>
              ),
          )}
        </Carousel>
        {filteredClubs.length === 0 && (
          <s.Nothing>동아리가 존재하지 않습니다</s.Nothing>
        )}
      </s.ClubsCard>
      <Paging>
        <Paging.Minus handleClick={handleIndex.minus} isEnable={current > 0} />
        <Paging.Current page={`${current + 1} / ${clubLength}`} />
        <Paging.Plus
          handleClick={handleIndex.plus}
          isEnable={current < clubLength - 1}
        />
      </Paging>
    </>
  )
}

export default Clubs
