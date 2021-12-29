//@ts-nocheck

import LinkIcon from '@components/Link'
import { box, color } from '@constants/theme'
import styled from '@emotion/styled'
import { BsPlayFill } from 'react-icons/bs'

export const MainSection = styled.section`
  width: ${box.marginWidth};
  margin: ${box.margin};
`

export const MainTitle = styled.p<{ hasIcon?: boolean }>`
  color: ${color.main};
  font-weight: 600;

  display: flex;
  justify-content: ${({ hasIcon }) =>
    hasIcon ? 'space-between' : 'flex-start'};
  align-items: center;

  margin-bottom: 8px;
`

export const IconTitle = ({ title, pathname }) => (
  <LinkIcon pathname={pathname}>
    <MainTitle hasIcon>
      {title}
      <BsPlayFill size={18} />
    </MainTitle>
  </LinkIcon>
)
