import React, { useEffect, useRef, useState } from 'react';
import { IMG_URI } from '@config/baseURI';
import ClubsCard from './ClubsCard';
import ClubsPaging from './ClubsPaging';
import Categories from './Categories';

import * as s from './styled';
import { useRouter } from 'next/router';
import { Club } from '@interface/Club';
import { getFontSize } from '@src/utils/font';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { css } from '@emotion/react';

interface Props {
  categories: string[];
  clubs: Club[];
}

const Clubs = ({ categories, clubs }: Props) => {
  const {
    query: { currentId },
  } = useRouter();
  const initRef = useRef(true);
  const [category, setCategory] = useState('전체');
  const filteredClubs: Club[] = clubs.filter((club) => {
    if (category === '전체') return true;

    return club.categories.includes(category);
  });

  const [current, setCurrent] = useState(0);
  const clubLength = filteredClubs.length;

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

  useEffect(() => {
    if (!currentId || clubs.length === 0 || !initRef.current) return;

    const currentClubIndex = clubs.findIndex(
      (club) => club.id === Number(currentId),
    );
    setCurrent(currentClubIndex > 0 ? currentClubIndex : 0);
    currentClubIndex !== -1 && (initRef.current = false);
  }, [currentId, clubs]);

  return (
    <>
      <Categories
        categories={['전체', ...categories]}
        category={category}
        handleCategory={handleCategory}
      />
      <s.ClubsCard
        css={(() => {
          switch (current) {
            case 0:
              return css`
                padding-left: 6%;
              `;
            case filteredClubs.length - 1:
              return css`
                padding-right: 6%;
              `;
          }
        })()}
      >
        <Carousel
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={88}
          interval={999999}
          onChange={(idx: number) => setCurrent(idx)}
          selectedItem={current}
        >
          {filteredClubs.length > 0 &&
            filteredClubs.map(
              (club, idx) =>
                club && (
                  <ClubsCard key={club?.name + idx}>
                    <ClubsCard.Image url={`${IMG_URI}/${club?.images[0]}`} />
                    <ClubsCard.Content>
                      <ClubsCard.Tag tag={'연행'} />
                      <ClubsCard.Name
                        name={club?.name}
                        summary={club?.summary}
                        fontSize={getFontSize(club?.summary?.length)}
                      />
                      <ClubsCard.Description description={club?.description} />
                    </ClubsCard.Content>
                  </ClubsCard>
                ),
            )}
        </Carousel>
        {filteredClubs.length === 0 && (
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
