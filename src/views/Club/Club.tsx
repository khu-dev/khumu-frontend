import React, { useState } from 'react';
import { css } from '@emotion/react';
import { IMG_URI } from '@config/baseURI';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import * as s from './styled';

const Circles = ({ clubs }) => {
  const clubLength = clubs.length;
  const [current, setCurrent] = useState(0);

  const handleIndex = {
    minus: () => {
      current > 0 && setCurrent((prev) => (prev - 1) % clubLength);
    },
    plus: () => {
      current < clubLength && setCurrent((prev) => (prev + 1) % clubLength);
    },
  };

  const currentClub = clubs[current];
  console.log(currentClub);

  return (
    <>
      <s.Tag>전체</s.Tag>
      <s.Card>
        <s.Image url={`${IMG_URI}/${currentClub.images[0]}`} />
        <s.Content>
          <s.Tag
            css={css`
              margin: 0;
            `}
          >
            연행
          </s.Tag>
          <s.NameWrapper>
            <s.Name>{currentClub.name}</s.Name>
            <s.Summary>{'태그'}</s.Summary>
          </s.NameWrapper>
          <s.P>{currentClub.description}</s.P>
        </s.Content>
      </s.Card>
      <s.Paging>
        <IoChevronBackOutline
          onClick={handleIndex.minus}
          css={current === 0 ? s.disabledStyle : s.enabledStyle}
        />
        <span>{`${current + 1} / ${clubLength}`}</span>
        <IoChevronForwardOutline
          onClick={handleIndex.plus}
          css={current === clubLength ? s.disabledStyle : s.enabledStyle}
        />
      </s.Paging>
    </>
  );
};

export default Circles;
