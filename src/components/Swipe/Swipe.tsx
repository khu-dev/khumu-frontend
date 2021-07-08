/**
 * @description 제작된 페이지 목록
 */
import React from 'react';
import { css } from '@emotion/react';
import { useSwipeElement } from 'src/hooks/useSwipeElement';

const threshold = 100;

export default function Swipe({ children, ...rest }) {
  const {
    gap,
    isMoving,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd, isEvent },
  } = useSwipeElement({ threshold, callback: () => console.log('event!') });

  console.log(gap);

  return (
    <div
      onMouseDown={handleTouchStart}
      onTouchStart={handleTouchStart}
      onMouseMove={handleTouchMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onTouchEnd={handleTouchEnd}
      css={css`
        width: 100%;
        height: 64px;
        background-color: green;

        ${isMoving
          ? css`
              transform: translate(-${gap}px);
            `
          : isEvent()
          ? css`
              transition: all 0.3s;
              transform: translateX(-100%);
            `
          : css`
              transition: all 0.4s;
              transform: translateX(0);
            `}
      `}
      {...rest}
    >
      {children}
    </div>
  );
}
