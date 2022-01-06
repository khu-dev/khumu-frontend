import { FC } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { css } from '@emotion/react'

import { color } from '@constants/theme'

import LinkIcon from '@components/Link'
import { Title02 } from '@components/Title'

interface Props {
  title: string
}

const NotificationsHeader: FC<Props> = ({ title }) => (
  <div className="header header-notifications">
    <LinkIcon pathname="/">
      <IoChevronBackOutline css={IconStyle} />
    </LinkIcon>
    <Title02 css={titleStyle}>{title}</Title02>
  </div>
)

export default NotificationsHeader

const IconStyle = css`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${color.gray4};
  font-size: 28px;
`

const titleStyle = css`
  color: ${color.main};
`
