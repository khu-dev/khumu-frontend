import { FC, MouseEventHandler } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { enabled, disabled } from './style'

interface Props {
  handleClick: MouseEventHandler<SVGElement>
  isEnable: boolean
}

const Minus: FC<Props> = ({ handleClick, isEnable }) => (
  <IoChevronBackOutline
    onClick={handleClick}
    css={isEnable ? enabled : disabled}
  />
)

export default Minus
