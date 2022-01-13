import { FC, MouseEventHandler } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { enabled, disabled } from './style'

interface Props {
  handleClick: MouseEventHandler<SVGElement>
  isEnable: boolean
}

const Plus: FC<Props> = ({ handleClick, isEnable }) => (
  <IoChevronForwardOutline
    onClick={handleClick}
    css={isEnable ? enabled : disabled}
  />
)

export default Plus
