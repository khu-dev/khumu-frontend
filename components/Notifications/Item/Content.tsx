import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { box } from '@constants/theme'

interface Props {
  children: ReactNode
}

const Content: FC<Props> = ({ children }) => <Container>{children}</Container>

export default Content

const Container = styled.div`
  width: calc(100vw - 150px);
  height: calc(100% - 16px);
  margin: 8px ${box.margin};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  position: relative;
`
