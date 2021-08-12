import React, { useState } from 'react';
import { IMG_URI } from '@config/baseURI';
import { useSwipeElement } from '@hooks/useSwipeElement';
import ClubsCard from './ClubsCard';
import ClubsPaging from './ClubsPaging';
import * as s from './styled';

const threshold = {
  x: 32,
  y: 1000,
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
      <ClubsCard
        onMouseDown={handleTouchStart}
        onTouchStart={handleTouchStart}
        onMouseMove={handleTouchMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchEnd={handleTouchEnd}
      >
        <ClubsCard.Image url={`${IMG_URI}/${currentClub?.images[0]}`} />
        <ClubsCard.Content>
          <ClubsCard.Tag tag={'연행'} />
          <ClubsCard.Name name={currentClub?.name} summary={'태그'} />
          <ClubsCard.Description description={currentClub?.description} />
        </ClubsCard.Content>
      </ClubsCard>
      <ClubsPaging>
        <ClubsPaging.Minus handleClick={handleIndex.minus} isEnable={current > 0} />
        <ClubsPaging.Current page={`${current + 1} / ${clubLength}`} />
        <ClubsPaging.Plus
          handleClick={handleIndex.plus}
          isEnable={current < clubLength}
        />
      </ClubsPaging>
    </>
  );
};

export default Club;
