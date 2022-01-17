import { AiOutlineUser } from 'react-icons/ai'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { box, color } from '@constants/theme'
import { FC } from 'react'

interface Props {
  src?: string
}

const ProfileImage: FC<Props> = ({ src }) => {
  return src ? (
    <Image src={src} alt="profile-image" width="100%" height="100%" />
  ) : (
    <NoImage>
      <AiOutlineUser color={color.gray1} size={60} />
    </NoImage>
  )
}

export default ProfileImage

const placeholder = css`
  width: 67.5px;
  height: 67.5px;
  border-radius: ${box.borderRadius};
  background-color: ${color.gray5};
`

const Image = styled.img(placeholder)

const NoImage = styled.div`
  ${placeholder};
  display: flex;
  justify-content: center;
  align-items: center;
`
