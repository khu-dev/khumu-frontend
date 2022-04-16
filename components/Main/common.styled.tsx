import { FC } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import styled from '@emotion/styled'

import { box, color } from '@constants/theme'

import LinkIcon from '@components/Common/Link'
import { mainStyle as style } from '@components/Skeleton'

interface Props {
  pathname: string
  title: string
  isLoading?: boolean
}

export const IconTitle: FC<Props> = ({ title, pathname, isLoading }) => (
  <LinkIcon pathname={isLoading ? '#' : pathname}>
    <MainTitle hasIcon isLoading={isLoading}>
      <span>{title}</span>
      <BsPlayFill size={18} />
    </MainTitle>
  </LinkIcon>
)

export const MainSection = styled.section`
  width: ${box.marginWidth};
  margin: ${box.margin};
`

export const MainTitle = styled.p<{ hasIcon?: boolean; isLoading?: boolean }>`
  color: ${color.main};
  font-weight: 600;

  display: flex;
  justify-content: ${({ hasIcon }) =>
    hasIcon ? 'space-between' : 'flex-start'};
  align-items: center;

  margin-bottom: 8px;

  ${({ isLoading }) => (isLoading ? style.title : '')}
`
