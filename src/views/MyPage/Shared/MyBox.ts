import { box } from '@constants/theme';
import styled from '@emotion/styled';

export const MyBox = styled.div`
  width: ${box.paddingWidth};
  height: auto;
  min-height: 30px;
  padding: ${box.padding};
  margin-bottom: ${box.margin};
  background-color: #4d4d4d;
  border-radius: ${box.borderRadius};
`;
