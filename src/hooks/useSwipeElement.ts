import React from 'react';

const isMouseEvent = (e) => {
  return e.type.includes('mouse');
};

interface SwipeElementProps {
  threshold?: {
    x?: number;
    y?: number;
  };
  callback?: {
    left?: Function;
    right?: Function;
  };
  prefix?: number;
  reset?: 'left' | 'right';
}

export const useSwipeElement = ({
  threshold = { x: 80, y: 80 },
  callback,
  reset,
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

  const resetPosition = () => {
    setPosition({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
    });
  };

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

    if (gapX >= threshold.x && gapY <= threshold.y) {
      callback?.left?.();
      reset === 'left' ? resetPosition() : setEvent(true);
    } else if (gapX <= -threshold.x && gapY <= threshold.y) {
      callback?.right?.();
      reset === 'right' ? resetPosition() : setEvent(true);
    } else {
      resetPosition();
    }
  };

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
