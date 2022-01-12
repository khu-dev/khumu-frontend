import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { IoChevronBackOutline } from 'react-icons/io5'
import { css } from '@emotion/react'

import { color as theme } from '@constants/theme'

import LinkIcon from '@components/Link'
import { Title02 } from '@components/Title'

interface Props {
  title: string
  hasIcon?: boolean
  pathname?: string
  handleRouter?: React.MouseEventHandler<SVGElement>
  className?: string
  Icon?: IconType // default is back button icon
  backgroundColor?: string
  color?: string
}

const CommonHeader: FC<Props> = ({
  title,
  hasIcon = true,
  pathname,
  handleRouter,
  className = '',
  Icon = IoChevronBackOutline,
  color = theme.main,
}) => {
  const csses = useStyles()

  return (
    <div
      className={`header header-align-center ${className} ${
        hasIcon ? '' : 'header-no-icon'
      }`}
    >
      {hasIcon &&
        (pathname ? (
          <LinkIcon pathname={pathname}>
            <Icon css={csses.icon} style={{ color }} />
          </LinkIcon>
        ) : (
          <Icon css={csses.icon} style={{ color }} onClick={handleRouter} />
        ))}
      <Title02 css={csses.title} style={{ color }}>
        {title}
      </Title02>
    </div>
  )
}

function useStyles() {
  return {
    icon: css`
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: ${theme.gray4};
      font-size: 28px;
    `,
    title: css`
      color: ${theme.main};
    `,
  }
}

export default CommonHeader
