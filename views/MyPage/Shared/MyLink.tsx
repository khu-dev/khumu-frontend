import { FC, ReactNode } from 'react'
import Link from 'next/link'

import { MyRow } from './MyRow'

interface Props {
  pathname: string
  children: ReactNode
}

export const LinkRow: FC<Props> = ({ pathname, children }) => (
  <Link href={pathname}>
    <MyRow>{children}</MyRow>
  </Link>
)
