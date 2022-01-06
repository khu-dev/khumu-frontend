import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { color } from '@constants/theme'

interface Props {
  children: ReactNode
}

const Content: FC<Props> = ({ children }) => <SContent>{children}</SContent>

export default Content

const SContent = styled.div`
  height: 178px;
  border-top: 1px solid ${color.gray4};
  padding: 16px;
  overflow-y: scroll;
  background-color: ${color.white};
`
