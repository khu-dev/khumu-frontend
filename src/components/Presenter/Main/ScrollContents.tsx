/**
 * @description Main화면 보여주는 Presenter
 */

import React from 'react';
import * as ms from './MainStyled';
import { ScrollAnimationItem } from '@components/Presenter/Main/items/ScrollAnimationItem';
import { STitle, TitleContainer } from '@components/Title/Title';
import { theme } from '@constants/theme';
import { SerializedStyles } from '@emotion/utils';
import { css } from '@emotion/react';
import ScrollAnimation from 'react-scroll-fade-animation';

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
      <STitle
        size={theme.title.L}
        css={css`
          color: ${theme.color.main};
        `}
      >
        {props.title}
      </STitle>
    </TitleContainer>
  );
}

export default function ScrollContents({
  item: { isAdvertise, title, ...rest },
  idx,
}: ScrollContentsPropsType) {
  return (
    <ScrollAnimation path={'top'}>
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
    </ScrollAnimation>
  );
}
