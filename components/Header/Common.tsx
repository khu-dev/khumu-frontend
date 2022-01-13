import { CSSProperties, FC } from 'react'
import { useRouter } from 'next/router'
import { IoChevronBackOutline } from 'react-icons/io5'
import { css } from '@emotion/react'
import classnames from 'classnames'

import { color as theme } from '@constants/theme'

import { Title02 } from '@components/Common/Title'

import styles from './Common.module.scss'

interface Props {
  center?: string
  left?: string
  hasIcon?: boolean
  backgroundColor?: string
  color?: string
}

const Header: FC<Props> = ({
  center,
  left,
  hasIcon = true,
  backgroundColor,
  color = theme.main,
}) => {
  const router = useRouter()

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
          onClick={router.back}
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
