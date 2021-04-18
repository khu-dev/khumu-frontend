import React, { useState } from 'react';
import { ItemContainer } from '@components/utils/container.styled';
import { theme } from '@components/utils/theme';
import { TitleContainer, XLTitle } from '@components/utils/title.styled';
import { FeedContainer } from '../Main.styled';

const Feed = () => {
  const isMain = true;
  const [selected, setSelected] = useState('lecture');

  const onTabClick = (e: React.MouseEvent<HTMLElement>) => {
    setSelected(e.target.id);
  };

  return (
    <FeedContainer>
      <TitleContainer isMain={isMain}>
        <XLTitle color={theme.color.white}>나의 피드</XLTitle>
      </TitleContainer>
      <ItemContainer
        id="lecture"
        isMain={isMain}
        height="18vh"
        selected={selected}
        onClick={onTabClick}
      >
        <span id="calender" />
        ㅍㅣ드
      </ItemContainer>
    </FeedContainer>
  );
};

export default Feed;
