/**
 * @description 제작된 페이지 목록
 */
import React from 'react';
import { useSwipeElement } from 'src/hooks/useSwipeElement';
import { SwipeContainer } from './styled';

const threshold = 24;

export default function Swipe({ children, ...rest }) {
  const {
    gap,
    isMoving,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd, isEvent },
  } = useSwipeElement({ threshold, callback: () => console.log('event!') });

  return (
    <SwipeContainer
      isMoving={isMoving}
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
    </SwipeContainer>
  );
}
