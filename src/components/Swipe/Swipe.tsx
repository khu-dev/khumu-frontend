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
    isEvent,
    isMoving,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd },
  } = useSwipeElement({ threshold, callback: () => console.log('event!') });
  const [isDelete, setDelete] = useState(false);

  console.log(isDelete);

  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        height: 72px;
        background-color: ${color.main};
        border-bottom: 1px solid ${color.gray6};
      `}
    >
      <Swiper
        isDelete={isDelete}
        isEvent={isEvent}
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
        onClick={() => setDelete(true)}
      >
        {'삭제'}
      </DeleteButton>
    </div>
  );
}
