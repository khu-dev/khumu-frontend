import { StyleType } from '@interfaces/style';
import styled, { keyframes, css } from 'styled-components';
import { theme } from './theme';

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

export const XLTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${(props: StyleType) => props.color || theme.color.black};

  ${(props: StyleType) => (props.isLoading ? loading_title('22px') : null)}
`;

export const LTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${(props: StyleType) => props.color || theme.color.black};

  ${(props: StyleType) => (props.isLoading ? loading_title('18px') : null)}
`;

export const MTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: ${(props: StyleType) => props.color || theme.color.black};

  ${(props: StyleType) => (props.isLoading ? loading_title('15px') : null)}
`;

export const STitle = styled.h4`
  font-size: 13px;
  font-weight: 600;
  color: ${(props: StyleType) => props.color || theme.color.black};

  ${(props: StyleType) => (props.isLoading ? loading_title('13px') : null)}
`;

export const TitleContainer = styled.div`
  width: ${(props: StyleType) => (props.isMain ? 'calc(100% - 64px)' : '100%')};
  height: ${(props: StyleType) => (props.isMain ? '10%' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props: StyleType) =>
    props.isMain ? 'flex-start' : 'center'};
  flex-grow: 1;
`;
