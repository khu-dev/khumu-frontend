import { FC } from 'react'
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { color, font } from '@constants/theme'

import LinkIcon from '@components/Common/Link'
import { Title02 } from '@components/Common/Title'

interface Props {
  title: string
  notificationsNum: number
}
const MainHeader: FC<Props> = ({ title, notificationsNum }) => (
  <div className={'header header-main'}>
    <Title02
      css={css`
        position: absolute;
        left: 0;
      `}
    >
      {title}
    </Title02>
    <LinkIcon pathname={'/qrcode'}>
      <AiOutlineQrcode
        size={font.iconSize}
        css={css`
          color: ${color.white};
          margin-right: 12px;
        `}
      />
    </LinkIcon>
    <LinkIcon pathname={'/notifications'} style={{ position: 'relative' }}>
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

export default MainHeader

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
