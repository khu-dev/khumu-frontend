/**
 * @description 제작된 페이지 목록
 */
import { color } from '@constants/theme';
import { css } from '@emotion/react';
import React from 'react';
import { useState } from 'react';
import { useSwipeElement } from 'src/hooks/useSwipeElement';
import { DeleteButton, Swiper } from './styled';

const threshold = 48;
const reset = 'right';

export default function NotificationSwiper({
  children,
  handleClick,
  handleDelete,
  ...rest
}) {
  const {
    isEvent,
    isMoving,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd },
  } = useSwipeElement({ threshold, reset });
  const [isDelete, setDelete] = useState(false);

  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        height: ${isDelete ? '0px' : '72px'};
        background-color: ${isDelete ? color.main : color.white};
        transition: height 0.5s 0.5s;
      `}
      {...rest}
    >
      <Swiper
        isDelete={isDelete}
        isEvent={isEvent}
        onClick={handleClick}
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
          handleDelete();
          setDelete(true);
        }}
      >
        {'삭제'}
      </DeleteButton>
    </div>
  );
}
