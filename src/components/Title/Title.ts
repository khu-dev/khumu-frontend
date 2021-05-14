import { StyleType } from '@interfaces/style';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@constants/theme';

/**
 * @description 타이틀 로딩시 깜빡거리는 애니메이션
 */

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

const loading_title = (minHeight: string) => css`
  width: 120px;
  height: ${minHeight};
  background-color: ${theme.color.gray};
  color: ${theme.color.gray};
  border-radius: 3px;
  content: ' ';
  animation: ${loading_keyframes} 1.3s infinite;
`;

interface TitleType {
  size: number;
  weight?: number;
  isLoading?: boolean;
}

export const STitle = styled.h1<TitleType>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight || 600}`};

  ${({ isLoading, size }) => isLoading && loading_title(`${size}px`)}
`;

export const TitleContainer = styled.div<StyleType>`
  width: ${(props: StyleType) => (props.isMain ? 'calc(100% - 64px)' : '100%')};
  height: ${(props: StyleType) => (props.isMain ? '10%' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props: StyleType) =>
    props.isMain ? 'flex-start' : 'center'};
  flex-grow: 1;
`;
