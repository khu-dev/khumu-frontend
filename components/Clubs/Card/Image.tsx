import { FC } from 'react'
import styled from '@emotion/styled'

import { color } from '@constants/theme'

interface Props {
  url: string
}

const Image: FC<Props> = ({ url }) => <SImage url={url} />

export default Image

const SImage = styled.div<{ url: string }>`
  flex: 1;
  background-color: ${color.gray4};
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`
