import { AnchorHTMLAttributes, FC, forwardRef, ReactNode } from 'react'
import Link from 'next/link'

interface IconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}
interface Props extends IconProps {
  pathname: string
}

const LinkIcon: FC<Props> = ({ pathname, children, ...rest }) => {
  const Icon = forwardRef<HTMLAnchorElement, IconProps>(function A(props, ref) {
    return (
      <a ref={ref} {...props}>
        {props.children}
      </a>
    )
  })

  return pathname ? (
    <Link href={pathname} passHref>
      <Icon {...rest}>{children}</Icon>
    </Link>
  ) : (
    <Icon {...rest}>{children}</Icon>
  )
}

export default LinkIcon
