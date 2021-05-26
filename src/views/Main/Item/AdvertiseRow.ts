import { box, color } from '@constants/theme';
import styled from '@emotion/styled';

export const AdvertiseRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 25vh;
  margin: ${box.margin} 0;

  background-color: ${color.main};
`;
