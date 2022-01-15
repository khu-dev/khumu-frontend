import React, { FC } from 'react'
import { IconBaseProps } from 'react-icons'
import styled from '@emotion/styled'

import { box, color } from '@constants/theme'
import { MdComment } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { BiBroadcast } from 'react-icons/bi'
import { HiBell } from 'react-icons/hi'
import { css } from '@emotion/react'

interface IconProps extends IconBaseProps {
  type: string
}

interface Props {
  isRead: boolean
}

export const Icons = ({ type, ...rest }: IconProps) => {
  switch (type) {
    case 'comment': // 댓글
      return <MdComment {...rest} />
    case 'hot': // 인기글
      return <FaHeart {...rest} />
    case 'announcement': // 공지사항
      return <BiBroadcast {...rest} />
    default:
      return <HiBell {...rest} />
  }
}

const Icon: FC<Props> = ({ isRead }) => (
  <NotiIcon>
    <Icons type="" css={iconStyle(isRead)} />
  </NotiIcon>
)

export default Icon

const NotiIcon = styled.div`
  width: calc(90px - 28px);
  height: ${box.marginWidth};
  margin: ${box.margin};
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const iconStyle = (isRead: boolean) => css`
  color: ${isRead ? color.gray5 : color.main};
  font-size: 32px;
`
