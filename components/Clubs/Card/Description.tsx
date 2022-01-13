import { FC } from 'react'
import styled from '@emotion/styled'

import { color } from '@constants/theme'

interface Props {
  description: string
}

const Description: FC<Props> = ({ description }) => (
  <SP
    dangerouslySetInnerHTML={{
      __html: description,
    }}
  ></SP>
)

export default Description

const SP = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: ${color.gray1};
  text-align: justify !important;
`
