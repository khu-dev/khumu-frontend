import styled from '@emotion/styled';

interface TitleType {
  size: number;
  weight?: number;
}

export const CustomTitle = styled.h1<TitleType>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight || 600}`};
`;
