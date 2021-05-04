/**
 * @description Main화면 보여주는 Presenter
 */

import React from 'react';
import * as ms from './MainStyled';
import { ScrollAnimationItem } from '@components/Main/items/ScrollAnimationItem';
import { LTitle, TitleContainer } from '@components/utils/styles/Title';
import { theme } from '@constants/theme';
import { SerializedStyles } from '@emotion/utils';

interface ScrollContentsPropsType {
  item: {
    title: string;
    numOfContents: number;
    flexDirection?: string;
    commonStyle?: SerializedStyles;
    height: string;
    margin?: {
      [key: string]: {
        [key: string]: string;
      };
    };
    isAdvertise?: boolean;
  };
  idx: number;
}

function ContentTitle(props: {
  isAdvertise: boolean | undefined;
  title: string;
}) {
  return props.isAdvertise ? null : (
    <TitleContainer>
      <LTitle color={theme.color.main}>{props.title}</LTitle>
    </TitleContainer>
  );
}

export default function ScrollContents({
  item: { isAdvertise, title, ...rest },
  idx,
}: ScrollContentsPropsType) {
  return (
    <ScrollAnimationItem
      init={{
        isInit: idx < 3,
        idx,
      }}
      height={rest.height}
      isAdvertise={isAdvertise}
    >
      <ContentTitle title={title} isAdvertise={isAdvertise} />
      <ms.Content flexDirection={rest.flexDirection}>
        {Array(rest.numOfContents)
          .fill(0)
          .map((_, i) => (
            <ms.ContentItem
              key={i}
              style={{
                borderRadius: isAdvertise ? '0px' : theme.borderRadius,
                ...(rest.margin && { ...rest.margin[i] }),
              }}
            ></ms.ContentItem>
          ))}
      </ms.Content>
    </ScrollAnimationItem>
  );
}
