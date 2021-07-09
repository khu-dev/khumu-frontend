/**
 * @description 제작된 페이지 목록
 */
import React from 'react';
import { useState } from 'react';
import { useSwipeElement } from 'src/hooks/useSwipeElement';
import { SwipeContainer } from './styled';

const threshold = 24;

export default function Swipe({ children, handleDelete, ...rest }) {
  const {
    gap,
    isMoving,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd, isEvent },
  } = useSwipeElement({ threshold, callback: () => console.log('event!') });
  const [isDelete, setDelete] = useState(false);

  return (
    <>
      <SwipeContainer
        isMoving={isMoving}
        isDelete={isDelete}
        isEvent={isEvent()}
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
        <span
          onClick={() => {
            setDelete(true);
            handleDelete();
          }}
        >
          {'삭제'}
        </span>
      </SwipeContainer>
    </>
  );
}
