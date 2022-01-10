import { FC } from 'react'
import styled from '@emotion/styled'

import { textOverflowHiddenStyle } from '../styled'

interface Props {
  content: string
}

const Description: FC<Props> = ({ content }) => (
  <NotiDescription>{content}</NotiDescription>
)

export default Description

const NotiDescription = styled.p`
  height: 16px;
  font-size: 13px;
  font-weight: 200;

  ${textOverflowHiddenStyle};
`
