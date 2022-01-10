import styled from '@emotion/styled'
import { FC, useEffect, useState } from 'react'
import * as s from './styled'

const CLUBS_CARD = 'clubs-card'

interface Props {
  category: string
  categories: string[]
  handleCategory(selected: string): void
}

const Categories: FC<Props> = ({
  category: currentCategory,
  categories,
  handleCategory,
}) => {
  const categoriesSet = new Set(categories)
  const uniqueCategories = [...categoriesSet]
  const [isActive, setIsActive] = useState(false)

  const handleActive = (status: boolean) => {
    setIsActive(status)
  }

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
      {currentCategory}
      {isActive && (
        <s.Filters id={CLUBS_CARD}>
          {uniqueCategories.map((category) => (
            <s.FilterItem
              key={category}
              isActive={category === currentCategory}
              onClick={() => {
                handleCategory(category)
                handleActive(false)
              }}
              id={CLUBS_CARD}
            >
              {category}
            </s.FilterItem>
          ))}
        </s.Filters>
      )}
    </STag>
  )
}

export default Categories

const STag = styled.div`
  ${s.tagStyle};
`
