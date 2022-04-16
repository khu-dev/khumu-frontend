import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { makeQueryString } from '@utils/qs'

import * as s from './styled'
import { useToken } from '@context/Token'
import { ClubApi } from '@api/ClubApi'

const CLUBS_CARD = 'clubs-card'

const Categories = () => {
  const {
    replace,
    query: { category },
  } = useRouter()
  const { token } = useToken()
  const [isActive, setIsActive] = useState(false)

  const [categories, setCategories] = useState<string[]>(['전체'])

  const uniqueCategories = [...new Set(categories)]
  const currentCategory = category || '전체'

  const handleActive = (status: boolean) => {
    setIsActive(status)
  }

  const handleFilter = (category: string) => {
    replace(
      `/clubs?${makeQueryString({
        clubId: undefined,
        category,
      })}`,
    )
    handleActive(false)
  }

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await ClubApi.categories()

      if (res.status === 200) {
        setCategories(['전체', ...res.data.data])
      }
    }

    fetchData()
  }, [token])

  useEffect(() => {
    const detectClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.id === CLUBS_CARD) return

      handleActive(false)
    }

    document.addEventListener('click', detectClick)

    return () => {
      document.removeEventListener('click', detectClick)
    }
  }, [])

  return (
    <STag
      onClick={() => {
        handleActive(!isActive)
      }}
      id={CLUBS_CARD}
    >
      {currentCategory || '전체'}
      {isActive && (
        <s.Filters id={CLUBS_CARD}>
          {uniqueCategories.map((category) => {
            const isActive = category === currentCategory

            return (
              <s.FilterItem
                key={category}
                isActive={isActive}
                onClick={() => {
                  if (isActive) return

                  handleFilter(category)
                }}
                id={CLUBS_CARD}
              >
                {category}
              </s.FilterItem>
            )
          })}
        </s.Filters>
      )}
    </STag>
  )
}

export default Categories

const STag = styled.div`
  ${s.tagStyle};
`
