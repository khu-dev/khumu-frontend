import Link from 'next/link';
import React from 'react';

interface LinkIconProps {
  pathname: string;
  children: JSX.Element;
}

export default function LinkIcon({
  pathname,
  children,
  ...rest
}: LinkIconProps) {
  const Icon: any = React.forwardRef<React.ReactNode>((props, _) => (
    <>{props.children}</>
  ));

  return (
    <Link href={pathname} {...rest}>
      <Icon>{children}</Icon>
    </Link>
  );
}
