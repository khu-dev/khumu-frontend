import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { StyleType } from '@interfaces/style';
import { theme } from '@constants/theme';

const scrollAnimation = keyframes`
from {
  opacity: 0;
  transform: translateY(80px);
}
to {
  opacity: 1;
  transform: none;
}
`;

export const ScrollItemContainer = styled.div`
  width: ${(props: StyleType) =>
    props.isAdvertise ? `100%` : theme.margin.width};
  min-height: ${(props: StyleType) => props.minHeight || null};
  height: ${(props: StyleType) => props.height || '25vh'};
  margin: ${(props: StyleType) =>
    props.isAdvertise ? `${theme.margin.base} 0%` : theme.margin.base};
  background-color: ${(props: StyleType) =>
    props.backgroundColor || theme.color.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 0;

  ${(props: StyleType) =>
    props.show || props.init
      ? css`
          opacity: 1;
          animation: ${scrollAnimation} 0.8s linear;
        `
      : css``};
`;
