import styled from '@emotion/styled';
import { color } from '@src/constants/theme';

export const AdItem = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 72px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  margin-top: 24px;
`;
