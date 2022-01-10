import { FC } from 'react'
import styled from '@emotion/styled'

import { color } from '@constants/theme'
import { textOverflowHiddenStyle } from '../styled'

interface Props {
  kind: string
}

const Kind: FC<Props> = ({ kind }) => <NotiKind>{kind}</NotiKind>

export default Kind

const NotiKind = styled.p`
  height: 16px;
  font-size: 13px;
  color: ${color.gray4};

  ${textOverflowHiddenStyle};
`
