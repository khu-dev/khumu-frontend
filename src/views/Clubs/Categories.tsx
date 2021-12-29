//@ts-nocheck

import React, { useEffect } from 'react'
import * as s from './styled'

const CLUBS_CARD = 'clubs-card'

export default function Categories({
  category: currentCategory,
  categories,
  handleCategory,
}) {
  const categoriesSet = new Set(categories)
  const uniqueCategories = [...categoriesSet]
  const [isActive, setIsActive] = React.useState(false)

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
    <s.Tag
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
    </s.Tag>
  )
}
