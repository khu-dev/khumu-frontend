import React, { useState } from 'react';
import { IMG_URI } from '@config/baseURI';
import { useSwipeElement } from '@hooks/useSwipeElement';
import ClubCard from './ClubCard';
import ClubPaging from './ClubPaging';
import * as s from './styled';

const threshold = {
  x: 32,
  y: 120,
};

const Club = ({ clubs }) => {
  const clubLength = clubs.length;
  const [current, setCurrent] = useState(0);
  const currentClub = clubs[current];

  const handleIndex = {
    minus: () => {
      current > 0 && setCurrent((prev) => (prev - 1) % clubLength);
    },
    plus: () => {
      current < clubLength - 1 && setCurrent((prev) => (prev + 1) % clubLength);
    },
  };

  const {
    handler: { handleTouchStart, handleTouchMove, handleTouchEnd },
  } = useSwipeElement({
    threshold,
    callback: {
      left: handleIndex.plus,
      right: handleIndex.minus,
    },
  });

  return (
    <>
      <s.Tag>전체</s.Tag>
      <ClubCard
        onMouseDown={handleTouchStart}
        onTouchStart={handleTouchStart}
        onMouseMove={handleTouchMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchEnd={handleTouchEnd}
      >
        <ClubCard.Image url={`${IMG_URI}/${currentClub?.images[0]}`} />
        <ClubCard.Content>
          <ClubCard.Tag tag={'연행'} />
          <ClubCard.Name name={currentClub?.name} summary={'태그'} />
          <ClubCard.Description description={currentClub?.description} />
        </ClubCard.Content>
      </ClubCard>
      <ClubPaging>
        <ClubPaging.Minus handleClick={handleIndex.minus} isEnable={current > 0} />
        <ClubPaging.Current page={`${current + 1} / ${clubLength}`} />
        <ClubPaging.Plus
          handleClick={handleIndex.plus}
          isEnable={current < clubLength}
        />
      </ClubPaging>
    </>
  );
};

export default Club;
