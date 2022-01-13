import { FC, ReactNode, useState } from 'react'
import { css } from '@emotion/react'

import { color } from '@constants/theme'
import { useSwipeElement } from '@hooks/useSwipeElement'

import { DeleteButton, Swiper } from './styled'

const threshold = {
  x: 48,
  y: 48,
}
const reset = 'right'

interface Props {
  children: ReactNode
  handleClick: Function
  handleDelete: Function
}

const NotificationSwiper: FC<Props> = ({
  children,
  handleClick,
  handleDelete,
}) => {
  const {
    isEvent,
    isMoving,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd },
  } = useSwipeElement({ threshold, reset })
  const [isDelete, setDelete] = useState(false)

  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        height: ${isDelete ? '0px' : '72px'};
        background-color: ${isDelete ? color.main : color.white};
        transition: height 0.5s 0.5s;
      `}
    >
      <Swiper
        isDelete={isDelete}
        isEvent={isEvent}
        onClick={(e) => handleClick(e)}
        onMouseDown={handleTouchStart}
        onTouchStart={handleTouchStart}
        onMouseMove={handleTouchMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </Swiper>
      <DeleteButton
        isMoving={isMoving}
        isDelete={isDelete}
        isEvent={isEvent}
        onClick={() => {
          handleDelete()
          setDelete(true)
        }}
      >
        {'삭제'}
      </DeleteButton>
    </div>
  )
}

export default NotificationSwiper
