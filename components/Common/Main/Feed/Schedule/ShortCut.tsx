import { FC } from 'react'
import styled from '@emotion/styled'

import { box, color } from '@constants/theme'

interface Props {
  title: string
  handleClick(): void
}

const ScheduleShortCut: FC<Props> = ({ title, handleClick }) => {
  return <Button onClick={handleClick}>{title}</Button>
}

export default ScheduleShortCut

const Button = styled.button`
  width: 52px;
  height: 16px;
  position: absolute;
  right: -4px;
  bottom: 8px;
  font-size: 10px;
  font-weight: 400;
  color: ${color.white};
  background-color: ${color.gray4};
  border: none;
  border-radius: ${box.borderRadius02};
`
