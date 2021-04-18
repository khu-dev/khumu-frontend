import { StyleType } from '@interfaces/style';
import styled from 'styled-components';
import { theme } from './theme';

export const OuterContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: ${theme.margin.width};
  height: ${(props: StyleType) => props.height || '40%'};
  margin: ${theme.margin.base};
  background-color: ${(props: StyleType) => props.backgroundColor || 'white'};
  border-radius: ${theme.borderRadius};
`;
