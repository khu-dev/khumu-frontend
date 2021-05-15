/**
 * @description 타이틀 로딩시 깜빡거리는 애니메이션
 */

import { keyframes, css } from '@emotion/react';
import { theme } from '@constants/theme';
import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
}

interface SkeletonLoadingProps extends SkeletonProps {
  isLoading?: boolean;
  render: () => JSX.Element;
}

const loading_keyframes = keyframes`
  0% {
    background-color: ${theme.color.gray};
  }
  50% {
    background-color: ${theme.color.lightgray};
  }
  100% {
    background-color: ${theme.color.gray};
  }
`;

function Skeleton({ width = '100%', height = '16px' }: SkeletonProps) {
  return (
    <div
      css={css`
        width: ${width};
        height: ${height};
        background-color: ${theme.color.gray};
        color: ${theme.color.gray};
        border-radius: 3px;
        content: ' ';
        animation: ${loading_keyframes} 1.3s infinite;
      `}
    />
  );
}

export default function SkeletonLoading({
  isLoading,
  width,
  height,
  render,
}: SkeletonLoadingProps) {
  return isLoading ? <Skeleton width={width} height={height} /> : render();
}
