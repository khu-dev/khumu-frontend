import { theme } from '@components/utils/styles/theme';
import { StyleType } from '@interfaces/style';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const FeedContainer = styled.div`
  width: 100%;
  min-height: 240px;
  height: 32vh;
  max-height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.main};
`;

export const Content = styled.div`
  width: 100%;
  flex: 5;
  display: flex;
  flex-direction: ${(props: StyleType) => props.flexDirection || 'row'};
`;

export const ContentItem = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.color.main};
`;
