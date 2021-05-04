import { theme } from '@constants/theme';
import { StyleType } from '@interfaces/style';
import styled from '@emotion/styled';

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const FeedContainer = styled.div`
  width: 100%;
  min-height: 220px;
  height: 30vh;
  max-height: 280px;
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
