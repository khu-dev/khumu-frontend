import { FC, MouseEventHandler } from 'react'

import * as s from './styled'

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Props> = ({ onClick }) => (
  <s.Button onClick={onClick}>완료</s.Button>
)

export default Button
