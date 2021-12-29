//@ts-nocheck

import Link from 'next/link'
import React from 'react'

export default function LinkIcon({ pathname, children, ...rest }: any) {
  const Icon: any = React.forwardRef<HTMLAnchorElement>(function Anchor(
    props,
    ref,
  ) {
    return (
      <a ref={ref} {...rest} {...props}>
        {props.children}
      </a>
    )
  })

  return pathname ? (
    <Link href={pathname} passHref>
      <Icon>{children}</Icon>
    </Link>
  ) : (
    <Icon>{children}</Icon>
  )
}
