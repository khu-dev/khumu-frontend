//@ts-nocheck

import Link from 'next/link'
import { MyRow } from './MyRow'

export const LinkRow = ({ pathname, children }) => (
  <Link href={pathname}>
    <MyRow>{children}</MyRow>
  </Link>
)
