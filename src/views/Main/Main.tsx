/**
 * @description Main화면 보여주는 Presenter
 */

import React, { useEffect, useState } from 'react';
import { CustomTitle } from '@components/Title';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';
import SkeletonContainer from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';

function ContentTitle(props: { isAdvertise: boolean | undefined; title: string }) {
  return props.isAdvertise ? null : (
    <div>
      <CustomTitle
        size={theme.title.L}
        css={css`
          color: ${theme.color.main};
        `}
      >
        {props.title}
      </CustomTitle>
    </div>
  );
}

export default function Main() {
  return (
  );
}
