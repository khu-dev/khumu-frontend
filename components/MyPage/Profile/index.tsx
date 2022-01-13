import { FC } from 'react'
import { css } from '@emotion/react'
import { MyBox } from '../Shared'

import Image from './Image'
import Info from './Info'
import ReleaseButton from './ReleaseButton'

interface Props {
  name?: string
  department?: string
  studentNumber?: string
  profileImage?: string
}

const Profile: FC<Props> = ({
  name,
  department,
  studentNumber,
  profileImage,
}) => (
  <MyBox
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
    isProfile
  >
    <Image src={profileImage} />
    <Info name={name} department={department} studentNumber={studentNumber} />
    <ReleaseButton title="나의 정보 변경" />
  </MyBox>
)

export default Profile
