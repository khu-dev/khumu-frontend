import { FC } from 'react'
import styled from '@emotion/styled'

import { textOverflowHiddenStyle } from '../styled'

interface Props {
  title: string
}

const Title: FC<Props> = ({ title }) => <NotiTitle>{title}</NotiTitle>

export default Title

const NotiTitle = styled.h2`
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  margin: 0;

  ${textOverflowHiddenStyle};
`
