/**
 * @description Main화면 보여주는 Presenter
 */

import React, { useEffect, useState } from 'react';
import { STitle } from '@components/Title/Title';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';
import SkeletonContainer from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';

function ContentTitle(props: { isAdvertise: boolean | undefined; title: string }) {
  return props.isAdvertise ? null : (
    <div>
      <STitle
        size={theme.title.L}
        css={css`
          color: ${theme.color.main};
        `}
      >
        {props.title}
      </STitle>
    </div>
  );
}

export default function ScrollContents({
  item: { isAdvertise, title, ...rest },
  idx,
}: any) {
  return (
    <div className={'main-item-container'}>
      <SkeletonContainer
        isLoading={true}
        render={(props: any) => (
          <div className={'main-item-content'} {...props}>
            hi
          </div>
        )}
        Skeleton={SkeletonMainItem}
      />
    </div>
  );
}
