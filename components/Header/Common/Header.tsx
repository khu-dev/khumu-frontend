import React, { CSSProperties, FC } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { css } from '@emotion/react'
import classnames from 'classnames'

import { color as theme } from '@constants/theme'

import { Title02 } from '@components/Common/Title'

import styles from './Header.module.scss'

interface Props {
  center?: string
  left?: string
  hasIcon?: boolean
  handleRouter?: React.MouseEventHandler<SVGElement>
  backgroundColor?: string
  color?: string
}

const Header: FC<Props> = ({
  center,
  left,
  hasIcon = true,
  handleRouter,
  backgroundColor,
  color = theme.main,
}) => {
  const defaultColor: CSSProperties = { color, backgroundColor }
  const isAlignCenter = !!center
  const title = center || left

  return (
    <div
      className={classnames('header', {
        [styles.center]: isAlignCenter,
        [styles.left]: !isAlignCenter,
        [styles.noIcon]: !hasIcon,
      })}
      style={defaultColor}
    >
      {hasIcon && (
        <IoChevronBackOutline
          css={iconStyle}
          style={defaultColor}
          onClick={handleRouter}
        />
      )}
      <Title02 css={titleStyle} style={defaultColor}>
        {title}
      </Title02>
    </div>
  )
}

const iconStyle = css`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.gray4};
  font-size: 28px;
`

const titleStyle = css`
  color: ${theme.main};
`

export default Header
