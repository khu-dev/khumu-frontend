import { css } from '@emotion/react'
import { color } from '@constants/theme'

const skeletonColor = `${color.gray5} !important;`

const skeleton = css`
  border-radius: 2px;
  color: ${color.transparency};
  background-color: ${skeletonColor};
`

export { skeleton }
