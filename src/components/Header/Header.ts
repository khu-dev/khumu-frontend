/**
 * @description 일반적인 헤더의 스타일
 */

import styled from '@emotion/styled';
import { theme } from '@constants/theme';

export const Header = styled.div`
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
