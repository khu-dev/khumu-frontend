import { ReactNode } from 'react'
import styled from '@emotion/styled'

import Minus from './Minus'
import Current from './Current'
import Plus from './Plus'

interface Props {
  children: ReactNode
}

const Paging = ({ children }: Props) => <SPaging>{children}</SPaging>

Paging.Minus = Minus
Paging.Current = Current
Paging.Plus = Plus

export default Paging

const SPaging = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`
