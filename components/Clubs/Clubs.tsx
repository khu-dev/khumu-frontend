import 'swiper/css'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ClubApi } from '@api/ClubApi'
import { IMG_URI } from '@config/baseURI'
import { getFontSize } from '@utils/font'
import { useToken } from '@context/Token'

import { Club } from '@interface/Club'

import Card from './Card'
import Paging from './Paging'

import * as s from './styled'
import styles from './Clubs.module.scss'
import { makeQueryString } from '@utils/qs'

const Clubs = () => {
  const {
    query: { clubId, category },
    replace,
  } = useRouter()

  const { token } = useToken()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [clubs, setClubs] = useState<Club[]>([])

  const filteredClubs: Club[] = clubs.filter((club) => {
    if (category === '전체' || !category) return true

    return club.categories!.includes(category as string)
  })
  const initialIndex = filteredClubs.findIndex(
    (club) => String(club.id) === clubId,
  )
  const clubLength = filteredClubs.length

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await ClubApi.query()

      if (res.status === 200) {
        setClubs(res.data.data)
      }

      setLoading(false)
    }

    fetchData()
  }, [token])

  return isLoading ? null : (
    <Swiper
      spaceBetween={15}
      slidesPerView={1.2}
      className={styles.swiper}
      initialSlide={initialIndex}
      allowTouchMove
      centeredSlides
      autoplay={false}
      onSlideChange={(e) => {
        replace(
          `/clubs?${makeQueryString({
            clubId: filteredClubs[e.realIndex].id,
            category,
          })}`,
        )
      }}
    >
      {filteredClubs?.map(
        (club, idx) =>
          club && (
            <SwiperSlide key={club?.name + idx}>
              <Card>
                <Card.Image url={`${IMG_URI}/${club?.images[0]}`} />
                <Card.Content>
                  <Card.Tag tag="연행" />
                  <Card.Name
                    name={club?.name}
                    summary={club?.summary}
                    fontSize={getFontSize(club?.summary?.length)}
                  />
                  <Card.Description description={club?.description} />
                </Card.Content>
              </Card>
            </SwiperSlide>
          ),
      )}

      {filteredClubs.length === 0 ? (
        <s.Nothing>동아리가 존재하지 않습니다</s.Nothing>
      ) : (
        <Paging initialIndex={initialIndex} clubLength={clubLength}>
          {({ currentIndex, handleNext, handlePrev }) => (
            <>
              <Paging.Minus
                handleClick={handlePrev}
                isEnable={currentIndex > 0}
              />
              <Paging.Current page={`${currentIndex + 1} / ${clubLength}`} />
              <Paging.Plus
                handleClick={handleNext}
                isEnable={currentIndex < clubLength - 1}
              />
            </>
          )}
        </Paging>
      )}
    </Swiper>
  )
}

export default Clubs
