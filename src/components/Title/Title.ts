import styled from '@emotion/styled'

interface STitleProps {
  size: number
  weight?: number
}

export const STitle = styled.h1<STitleProps>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight || 600}`};
`
