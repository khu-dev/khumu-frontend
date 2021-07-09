import React from 'react';

const isMouseEvent = (e) => {
  return e.type.includes('mouse');
};

/**
 * @param threshold 왼쪽으로 해당 값보다 더 움직이면 이벤트 발생
 * @returns
 */
export const useSwipeElement = ({ threshold = 80, callback, prefix = 72 }) => {
  const [isMoving, setMoving] = React.useState(false);
  const [position, setPosition] = React.useState({
    start: 0,
    end: 0,
  });

  const handleTouchStart = (e) => {
    const isMouse = isMouseEvent(e);

    setMoving(true);
    setPosition({
      start: isMouse ? e.clientX : e.targetTouches[0].clientX,
      end: isMouse ? e.clientX : e.targetTouches[0].clientX,
    });
  };

  const handleTouchMove = (e) => {
    const isMouse = isMouseEvent(e);

    if (position.start - position.end > prefix) {
      setMoving(false);
    }

    isMoving &&
      setPosition({
        ...position,
        end: isMouse ? e.clientX : e.targetTouches[0].clientX,
      });
  };

  const handleTouchEnd = () => {
    const gap = position.start - position.end;
    setMoving(false);

    if (gap >= threshold) {
      callback();
    } else {
      setPosition({
        start: 0,
        end: 0,
      });
    }
  };

  const isEvent = () => {
    return position.start - position.end > threshold / 2;
  };

  return {
    startPoint: position.start,
    endPoint: position.end,
    gap: position.start - position.end,
    isMoving,
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd, isEvent },
  };
};
