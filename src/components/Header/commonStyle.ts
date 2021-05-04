import { css } from '@emotion/react';
import { theme } from 'src/constants/theme';

export const commonStyle = css`
  width: ${theme.padding.width};
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${theme.padding.base};
  background-color: ${theme.color.white};
  color: ${theme.color.black};
`;
