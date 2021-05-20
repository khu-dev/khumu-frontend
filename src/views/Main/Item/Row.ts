import { box, color } from '@constants/theme';
import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${box.marginWidth};
  height: 25vh;
  margin: ${box.margin};

  border: 1px solid ${color.main};
  border-radius: ${box.borderRadius};
`;
