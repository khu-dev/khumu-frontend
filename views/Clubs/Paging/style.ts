import { css } from '@emotion/react'
import { color } from '@constants/theme'

const buttonStyle = css`
  font-size: 18px;
`

const disabled = css`
  ${buttonStyle};
  color: ${color.gray4};
`

const enabled = css`
  ${buttonStyle};
  color: ${color.main};
`

export { disabled, enabled }
