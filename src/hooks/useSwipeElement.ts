import React from 'react';

const isMouseEvent = (e) => {
  return e.type.includes('mouse');
};

interface SwipeElementProps {
  threshold?: number;
  callback?: Function;
  prefix?: number;
}

/**
 * @param threshold 왼쪽으로 해당 값보다 더 움직이면 이벤트 발생
 * @returns
 */
export const useSwipeElement = ({
  threshold = 80,
  callback,
}: // prefix = 72,
SwipeElementProps) => {
  const [isMoving, setMoving] = React.useState(false);
  const [isEvent, setEvent] = React.useState(false);
  const [position, setPosition] = React.useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  });

  const handleTouchStart = (e) => {
    const isMouse = isMouseEvent(e);
    setEvent(false);
    setMoving(true);
    setPosition({
      startX: isMouse ? e.clientX : e.targetTouches[0].clientX,
      startY: isMouse ? e.clientY : e.targetTouches[0].clientY,
      endX: isMouse ? e.clientX : e.targetTouches[0].clientX,
      endY: isMouse ? e.clientY : e.targetTouches[0].clientY,
    });
  };

  const handleTouchMove = React.useCallback(
    (e) => {
      const isMouse = isMouseEvent(e);

      isMoving &&
        setPosition({
          ...position,
          endX: isMouse ? e.clientX : e.targetTouches[0].clientX,
          endY: isMouse ? e.clientY : e.targetTouches[0].clientY,
        });
    },
    [isMoving],
  );

  const handleTouchEnd = () => {
    const gapX = position.startX - position.endX;
    const gapY = Math.abs(position.startY - position.endY);
    setMoving(false);

    if (gapX >= threshold && gapY <= threshold) {
      setEvent(true);
      callback?.();
    } else {
      setPosition({
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
      });
    }
  };

  // const isEvent = () => {
  //   return position.start - position.end > threshold / 2;
  // };

  return {
    startPoint: position.startX,
    endPoint: position.endX,
    gap: position.startX - position.endX,
    isMoving,
    isEvent,
    handler: {
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      // isEvent
    },
  };
};
