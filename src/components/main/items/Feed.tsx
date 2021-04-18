import React, { useState } from 'react';
import { ItemContainer } from '@components/utils/container.styled';
import { theme } from '@components/utils/theme';
import { TitleContainer, XLTitle } from '@components/utils/title.styled';
import { FeedContainer } from '../Main.styled';

const tabList = ['lecture', 'calender'];

const Feed = () => {
  const isMain = true;
  const [selected, setSelected] = useState('lecture');

  const onTabClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!tabList.includes(e.target.id)) return;
    setSelected(e.target.id);
  };

  return (
    <FeedContainer>
      <TitleContainer isMain={isMain}>
        <XLTitle color={theme.color.white}>나의 피드</XLTitle>
      </TitleContainer>
      <ItemContainer
        isMain={isMain}
        height="140px"
        selected={selected}
        onClick={onTabClick}
      >
        <span id="lecture" />
        <span id="calender" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: theme.margin.width,
            height: '100%',
            margin: '20px',
            marginLeft: '32px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <input
                type="checkbox"
                style={{ width: '13px', height: '13px', marginRight: '12px' }}
              />
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                }}
              >
                산업디자인사
              </h2>
            </div>
            <div style={{ marginLeft: '25px' }}>09:00 ~ 13:45</div>
          </div>
          <span style={{ marginLeft: '25px', fontSize: '14px' }}>
            수업종료까지 <strong>1시간 45분</strong> 남았습니다
          </span>
        </div>
        <span id="date" />
        <span />
      </ItemContainer>
    </FeedContainer>
  );
};

export default Feed;
