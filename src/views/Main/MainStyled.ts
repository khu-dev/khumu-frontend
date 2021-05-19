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
