import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { color } from '@constants/theme'

interface Props {
  title: string
}

const ReleaseButton: FC<Props> = ({ title }) => (
  <Link href={'/mypage/edit'}>
    <Span>{title}</Span>
  </Link>
)

export default ReleaseButton

const Span = styled.span`
  width: 76px;
  height: 23px;
  align-self: flex-end;
  border-radius: 20px;
  border: none;
  background-color: ${color.white};
  font-size: 10px;
  font-weight: 400;
  color: #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
`
