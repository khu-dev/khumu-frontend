import { StyleType } from '@interfaces/style';
import styled from 'styled-components';
import { theme } from './theme';

export const XLTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${(props: StyleType) => props.color || theme.color.black};
`;

export const LTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${(props: StyleType) => props.color || theme.color.black};
`;

export const MTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: ${(props: StyleType) => props.color || theme.color.black};
`;

export const STitle = styled.h4`
  font-size: 13px;
  font-weight: 600;
  color: ${(props: StyleType) => props.color || theme.color.black};
`;

export const TitleContainer = styled.div`
  width: ${(props: StyleType) =>
    props.isMain ? 'calc(100% - 48px)' : theme.margin.width};
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
