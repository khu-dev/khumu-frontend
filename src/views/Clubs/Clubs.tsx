import React, { useEffect, useRef, useState } from 'react';
import { IMG_URI } from '@config/baseURI';
import { useSwipeElement } from '@hooks/useSwipeElement';
import ClubsCard from './ClubsCard';
import ClubsPaging from './ClubsPaging';
import Categories from './Categories';

import * as s from './styled';
import { useRouter } from 'next/router';
import { Club } from '@interface/Club';

const threshold = {
  x: 0,
  y: 1000,
};

const Clubs = ({ categories, clubs }) => {
  const {
    query: { currentId },
  } = useRouter();
  const initRef = useRef(true);
  const [category, setCategory] = useState('전체');
  const filteredClubs: Club[] = clubs.filter((club) => {
    if (category === '전체') return true;

    return club.categories === category;
  });

  const [current, setCurrent] = useState(0);
  const clubLength = filteredClubs.length;

  useEffect(() => {
    if (!currentId || clubs.length === 0 || !initRef.current) return;

    const currentClubIndex = clubs.findIndex(
      (club) => club.id === Number(currentId),
    );
    setCurrent(currentClubIndex > 0 ? currentClubIndex : 0);
    currentClubIndex !== -1 && (initRef.current = false);
  }, [currentId, clubs]);

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
    setCurrent(0);
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

  const currentClub = [
    filteredClubs[current - 1],
    filteredClubs[current],
    filteredClubs[current + 1],
  ];

  return (
    <>
      <Categories
        categories={['전체', ...categories]}
        category={category}
        handleCategory={handleCategory}
      />
      <s.ClubsCard>
        {filteredClubs.length > 0 ? (
          currentClub.map(
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
          )
        ) : (
          <s.Nothing>동아리가 존재하지 않습니다</s.Nothing>
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
