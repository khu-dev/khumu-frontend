import { FC, HTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { box, color } from '@constants/theme'

interface Props extends HTMLAttributes<HTMLDivElement> {
  pathname: string
  children: ReactNode
}

export const LinkButton: FC<Props> = ({ pathname, children, ...rest }) => (
  <Link href={pathname}>
    <MyButton {...rest}>{children}</MyButton>
  </Link>
)

export const MyButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 4px 0;
`

export const MyButton = styled.div<{ isSingle?: boolean }>`
  width: ${({ isSingle }) => (isSingle ? '100%' : '32%')};
  height: ${({ isSingle }) => (isSingle ? '42px' : '68px')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  font-size: 16px;
  background-color: #4d4d4d;
  border-radius: ${box.borderRadius};
  margin-bottom: ${({ isSingle }) => (isSingle ? box.margin : 0)};
`
