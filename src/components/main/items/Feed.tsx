import React, { useState } from 'react';
import { ItemContainer } from '@components/utils/container.styled';
import { theme } from '@components/utils/theme';
import { TitleContainer, XLTitle } from '@components/utils/title.styled';
import { FeedContainer } from '../Main.styled';

const Peed = () => {
  const isMain = true;
  const [selected, setSelected] = useState('lecture');

  const onTabClick = () => {
    setSelected((prev: string) =>
      prev === 'lecture' ? 'calender' : 'lecture',
    );
  };

  return (
    <FeedContainer>
      <TitleContainer isMain={isMain}>
        <XLTitle color={theme.color.white}>나의 피드</XLTitle>
      </TitleContainer>
      <ItemContainer
        isMain={isMain}
        height="18vh"
        selected={selected}
        onClick={onTabClick}
      >
        <span />
        ㅍㅣ드
      </ItemContainer>
    </FeedContainer>
  );
};

export default Peed;
