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
    start: 0,
    end: 0,
  });

  const handleTouchStart = (e) => {
    const isMouse = isMouseEvent(e);
    setEvent(false);
    setMoving(true);
    setPosition({
      start: isMouse ? e.clientX : e.targetTouches[0].clientX,
      end: isMouse ? e.clientX : e.targetTouches[0].clientX,
    });
  };

  const handleTouchMove = React.useCallback(
    (e) => {
      const isMouse = isMouseEvent(e);

      isMoving &&
        setPosition({
          ...position,
          end: isMouse ? e.clientX : e.targetTouches[0].clientX,
        });
    },
    [isMoving],
  );

  const handleTouchEnd = () => {
    const gap = position.start - position.end;
    setMoving(false);

    if (gap >= threshold) {
      setEvent(true);
      callback();
    } else {
      setPosition({
        start: 0,
        end: 0,
      });
    }
  };

  // const isEvent = () => {
  //   return position.start - position.end > threshold / 2;
  // };

  return {
    startPoint: position.start,
    endPoint: position.end,
    gap: position.start - position.end,
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
