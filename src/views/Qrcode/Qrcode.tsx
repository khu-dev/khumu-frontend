import styled from '@emotion/styled'

import { color } from '@constants/theme'
import { Profile as ProfileType } from '@interface/Profile'

import Image from './Image'
import Profile from './Profile'

interface Props {
  qrcode: string
  profile: ProfileType
  handleRefresh(): void
}

const Qrcode = ({ qrcode, profile, handleRefresh }: Props) => (
  <Container>
    <Image qrcodeUrl={qrcode} onRefresh={handleRefresh} />
    <Profile>
      <Profile.Row title="이름" description={profile.name} />
      <Profile.Row title="학번" description={profile.student_number} />
      <Profile.Row title="학과" description={profile.department} />
    </Profile>
  </Container>
)

export default Qrcode

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: calc(100vh - 160px);
  padding: 48px 0;
  width: 100%;
  background-color: ${color.main};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  color: ${color.white};
`
