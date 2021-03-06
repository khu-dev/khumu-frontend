import { FC } from 'react'
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import classnames from 'classnames'

import { color, font } from '@constants/theme'

import LinkIcon from '@components/Common/Link'
import { Title02 } from '@components/Common/Title'

import styles from './Main.module.scss'
import WithEasterEgg from '../Title/WithEasterEgg'

interface Props {
  title: string
  notificationsNum: number
}
const Main: FC<Props> = ({ title, notificationsNum }) => (
  <div className={classnames('header', styles.header)}>
    <WithEasterEgg>
      <Title02
        css={css`
          position: absolute;
          left: 0;
        `}
      >
        {title}
      </Title02>
    </WithEasterEgg>
    <LinkIcon pathname="/qrcode">
      <AiOutlineQrcode
        size={font.iconSize}
        css={css`
          color: ${color.white};
          margin-right: 12px;
        `}
      />
    </LinkIcon>
    <LinkIcon
      pathname="/notifications"
      css={css`
        position: relative;
      `}
    >
      {notificationsNum > 0 && <Unreads>{notificationsNum}</Unreads>}
      <AiOutlineBell
        size={font.iconSize}
        css={css`
          color: ${color.white};
        `}
      />
    </LinkIcon>
  </div>
)

export default Main

const Unreads = styled.span`
  position: absolute;
  top: -2px;
  right: -3px;
  color: ${color.main};
  font-size: 7px;
  background-color: ${color.white};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
`
