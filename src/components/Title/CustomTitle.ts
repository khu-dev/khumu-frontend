import styled from '@emotion/styled';

interface TitleType {
  size: number;
  weight?: number;
}

export const CustomTitle = styled.h1<TitleType>`
  height: ${({ size }) => size + 7}px;
  line-height: ${({ size }) => size + 7}px;
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight || 600}`};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
