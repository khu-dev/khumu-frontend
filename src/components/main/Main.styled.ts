import { theme } from '@components/utils/theme';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PeedContainer = styled.div`
  width: 100%;
  height: 34vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.main};
`;
