/**
 * @description 제작된 페이지 목록
 */
import { color } from '@constants/theme';
import { css } from '@emotion/react';
import React from 'react';
import { useState } from 'react';
import { useSwipeElement } from 'src/hooks/useSwipeElement';
import { DeleteButton, Swiper } from './styled';

const threshold = 24;

export default function Swipe({ children, handleDelete, ...rest }) {
  const {
    gap,
    isMoving,
    isEvent,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd },
  } = useSwipeElement({ threshold, callback: () => console.log('event!') });
  const [isDelete, setDelete] = useState(false);

  return (
    <div
      css={css`
        position: relative;
        background-color: ${color.main};
      `}
    >
      <Swiper
        onClick={() => {
          console.log(isMoving, isEvent, gap);
        }}
        isMoving={isMoving}
        isDelete={isDelete}
        isEvent={isEvent}
        gap={gap}
        onMouseDown={handleTouchStart}
        onTouchStart={handleTouchStart}
        onMouseMove={handleTouchMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchEnd={handleTouchEnd}
        {...rest}
      >
        {children}
      </Swiper>
      <DeleteButton
        isMoving={isMoving}
        isDelete={isDelete}
        isEvent={isEvent}
        gap={gap}
        onClick={() => {
          setDelete(true);
          handleDelete();
        }}
      >
        {'삭제'}
      </DeleteButton>
    </div>
  );
}
