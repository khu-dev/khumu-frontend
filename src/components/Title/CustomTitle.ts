import { titleStyle } from '@components/Skeleton/Common'
import styled from '@emotion/styled'

interface CustomTitleProps {
  size: number
  weight?: number
  isLoading?: boolean
}

export const CustomTitle = styled.h1<CustomTitleProps>`
  height: ${({ size }) => size + 7}px;
  line-height: ${({ size }) => size + 7}px;
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight || 600}`};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${({ isLoading }) => (isLoading ? titleStyle.common : '')};
`
