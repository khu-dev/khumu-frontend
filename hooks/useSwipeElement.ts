import React from 'react'

const isMouseEvent = (e: any) => {
  return e.type.includes('mouse')
}

interface Props {
  threshold?: {
    x?: number
    y?: number
  }
  reset?: 'left' | 'right'
}

export const useSwipeElement = ({
  threshold = { x: 80, y: 80 },
  reset,
}: Props) => {
  const [isMoving, setMoving] = React.useState(false)
  const [isEvent, setEvent] = React.useState(false)
  const [position, setPosition] = React.useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  })

  const resetPosition = () => {
    setPosition({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
    })
  }

  const handleTouchStart = (e: any) => {
    const isMouse = isMouseEvent(e)
    setEvent(false)
    setMoving(true)
    setPosition({
      startX: isMouse ? e.clientX : e.targetTouches[0].clientX,
      startY: isMouse ? e.clientY : e.targetTouches[0].clientY,
      endX: isMouse ? e.clientX : e.targetTouches[0].clientX,
      endY: isMouse ? e.clientY : e.targetTouches[0].clientY,
    })
  }

  const handleTouchMove = React.useCallback(
    (e) => {
      if (!isMoving) return
      const isMouse = isMouseEvent(e)

      setPosition({
        ...position,
        endX: isMouse ? e.clientX : e.targetTouches[0].clientX,
        endY: isMouse ? e.clientY : e.targetTouches[0].clientY,
      })
    },
    [isMoving, position],
  )

  const handleTouchEnd = () => {
    const gapX = position.startX - position.endX
    const gapY = Math.abs(position.startY - position.endY)
    setMoving(false)

    if (gapX >= threshold.x! && gapY <= threshold.y!) {
      reset === 'left' ? resetPosition() : setEvent(true)
    } else if (gapX <= -threshold.x! && gapY <= threshold.y!) {
      reset === 'right' ? resetPosition() : setEvent(true)
    } else {
      resetPosition()
    }
  }

  return {
    isMoving,
    isEvent,
    handler: {
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
    },
  }
}
