import { FC } from 'react'
import styled from '@emotion/styled'

import { color } from '@constants/theme'

interface Props {
  name: string
  summary: string
  fontSize: string
}

const Name: FC<Props> = ({ name, summary, fontSize }) => (
  <NameWrapper>
    <SName>{name}</SName>
    <Summary fontSize={fontSize}>{summary}</Summary>
  </NameWrapper>
)

export default Name

const NameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
`

const SName = styled.h2`
  margin: 0;
  margin-right: 16px;
  color: ${color.main};
  white-space: nowrap;
`

const Summary = styled.span<{ fontSize: string }>`
  color: ${color.black};
  font-size: ${({ fontSize }) => fontSize};
`
