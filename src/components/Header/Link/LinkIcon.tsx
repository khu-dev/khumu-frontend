/**
 * @description 아이콘 클릭시 링크를 통해 route
 */

import Link from 'next/link';
import React from 'react';

interface LinkIconProps {
  pathname: string;
  children: JSX.Element;
}

export default function LinkIcon({ pathname, children }: LinkIconProps) {
  const Icon: any = React.forwardRef<HTMLAnchorElement>((props, ref) => (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  ));

  return (
    <Link href={pathname} passHref>
      <Icon>{children}</Icon>
    </Link>
  );
}
