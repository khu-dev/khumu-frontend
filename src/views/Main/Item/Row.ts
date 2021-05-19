import { theme } from '@constants/theme';
import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${theme.margin.width};
  height: 25vh;
  margin: ${theme.margin.base};

  border: 1px solid ${theme.color.main};
  border-radius: ${theme.borderRadius};
`;
