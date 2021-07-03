/**
 * @description 제작된 페이지 목록
 */
import React from 'react';
import { css } from '@emotion/react';

export default function MainPage() {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function handleTouchStart(e) {
    console.log('start', e.targetTouches[0]);

    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    console.log('move', e.targetTouches[0]);

    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 0) {
      // do your stuff here for left swipe
      // moveSliderRight();
      console.log('right');
    }

    if (touchStart - touchEnd < -0) {
      // do your stuff here for right swipe
      console.log('left');
      // moveSliderLeft();
    }
  }
  return (
    <>
      <div
        onClick={() => console.log('hi')}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        css={css`
          width: 100%;
          height: 64px;
          background-color: green;
        `}
      ></div>
    </>
  );
}
