import { box } from '@constants/theme';
import styled from '@emotion/styled';

export const Box = styled.div`
  width: ${box.paddingWidth};
  height: auto;
  min-height: 60px;
  padding: ${box.padding};
  background-color: #4d4d4d;
  border-radius: ${box.borderRadius};
`;
