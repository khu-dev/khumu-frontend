/**
 * @description Main화면 보여주는 Presenter
 */

import React from 'react';
import * as ms from './Main.styled';
import Feed from './items/Feed.container';
import { ScrollAnimationItem } from '@components/main/items/ScrollAnimationItem';
import { LTitle, TitleContainer } from '@components/utils/styles/title.styled';
import { theme } from '@components/utils/styles/theme';

const MainPresenter = ({ itemList }: any) => (
  <ms.ContentContainer>
    <Feed />
    {itemList.map((item, idx) => (
      <ScrollAnimationItem
        key={item.title}
        init={{
          isInit: idx < 3,
          idx,
        }}
        height={item.height}
        isAdvertise={item.title === '광고'}
      >
        {item.title !== '광고' && (
          <TitleContainer>
            <LTitle color={theme.color.main}>{item.title}</LTitle>
          </TitleContainer>
        )}
        <ms.Content flexDirection={item.flexDirection}>
          {Array(item.numOfContents)
            .fill(0)
            .map((content, i) => (
              <ms.ContentItem
                key={item.title + i}
                style={{
                  borderRadius:
                    item.title === '광고' ? '0px' : theme.borderRadius,
                  ...(item.margin && { ...item.margin[i] }),
                }}
              ></ms.ContentItem>
            ))}
        </ms.Content>
      </ScrollAnimationItem>
    ))}
  </ms.ContentContainer>
);

export default MainPresenter;
