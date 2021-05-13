/**
 * @description Main화면 보여주는 Presenter
 */

import React from 'react';
import Feed from './Feed';
import * as ms from './MainStyled';
import ScrollContents from './ScrollContents';

interface MarginType {
  [idx: string]: {
    [key: string]: string;
  };
}

interface ItemType {
  title: string;
  flexDirection?: string;
  numOfContents: number;
  height: string;
  margin?: MarginType;
}

const MainPresenter = ({ itemList }: any) => (
  <>
    <ms.ContentContainer>
      <Feed />
      {itemList.map((item: ItemType, idx: number) => (
        <ScrollContents key={item.title} item={item} idx={idx} />
      ))}
    </ms.ContentContainer>
  </>
);

export default MainPresenter;
