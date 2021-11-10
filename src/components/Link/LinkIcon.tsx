/**
 * @description 아이콘 클릭시 링크를 통해 route
 */

import Link from 'next/link';
import React from 'react';

export default function LinkIcon({ pathname, children, ...rest }) {
  const Icon: any = React.forwardRef<HTMLAnchorElement>((props, ref) => (
    <a ref={ref} {...rest} {...props}>
      {props.children}
    </a>
  ));

  return pathname ? (
    <Link href={pathname} passHref>
      <Icon>{children}</Icon>
    </Link>
  ) : (
    <Icon>{children}</Icon>
  );
}
