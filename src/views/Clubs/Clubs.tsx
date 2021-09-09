import React, { useState } from 'react';
import { IMG_URI } from '@config/baseURI';
import { useSwipeElement } from '@hooks/useSwipeElement';
import ClubsCard from './ClubsCard';
import ClubsPaging from './ClubsPaging';
import Categories from './Categories';

import * as s from './styled';

const threshold = {
  x: 0,
  y: 1000,
};

const Clubs = ({ categories, clubs }) => {
  const [category, setCategory] = useState('전체');
  const filteredClubs = clubs.filter((club) => {
    if (category === '전체') return true;

    return club.categories === category;
  });

  const [current, setCurrent] = useState(0);
  const clubLength = filteredClubs.length;
  const currentClub = [
    filteredClubs[current - 1],
    filteredClubs[current],
    filteredClubs[current + 1],
  ];

  const handleIndex = {
    minus: () => {
      current > 0 && setCurrent((prev) => (prev - 1) % clubLength);
    },
    plus: () => {
      current < clubLength - 1 && setCurrent((prev) => (prev + 1) % clubLength);
    },
  };

  const handleCategory = (selected) => {
    setCategory(selected);
  };

  const {
    gap,
    isMoving,
    isEvent,
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
      <Categories
        categories={['전체', ...categories]}
        category={category}
        handleCategory={handleCategory}
      />
      <s.ClubsCard>
        {currentClub.map(
          (club, idx) =>
            club && (
              <ClubsCard
                key={club?.name + idx}
                onMouseDown={handleTouchStart}
                onTouchStart={handleTouchStart}
                onMouseMove={handleTouchMove}
                onTouchMove={handleTouchMove}
                onMouseUp={handleTouchEnd}
                onTouchEnd={handleTouchEnd}
                gap={gap}
                isMoving={isMoving}
                isEvent={isEvent}
                idx={idx - 1}
              >
                <ClubsCard.Image url={`${IMG_URI}/${club?.images[0]}`} />
                <ClubsCard.Content>
                  <ClubsCard.Tag tag={'연행'} />
                  <ClubsCard.Name name={club?.name} summary={'태그'} />
                  <ClubsCard.Description description={club?.description} />
                </ClubsCard.Content>
              </ClubsCard>
            ),
        )}
      </s.ClubsCard>
      <ClubsPaging>
        <ClubsPaging.Minus handleClick={handleIndex.minus} isEnable={current > 0} />
        <ClubsPaging.Current page={`${current + 1} / ${clubLength}`} />
        <ClubsPaging.Plus
          handleClick={handleIndex.plus}
          isEnable={current < clubLength - 1}
        />
      </ClubsPaging>
    </>
  );
};

export default Clubs;
