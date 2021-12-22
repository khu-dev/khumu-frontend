import { color } from '@constants/theme'
import styled from '@emotion/styled'

import QrcodeImage from './QrcodeImage'
import QrcodeProfile from './QrcodeProfile'
import QrcodeRefresh from './QrcodeRefresh'
import { QRCodeDataProps } from './type'

const Qrcode = ({ qrcode, profile, handleRefresh }: QRCodeDataProps) => (
  <Container>
    <QrcodeImage qrcode={qrcode} />
    <QrcodeRefresh
      handleRefresh={() => {
        handleRefresh()
      }}
    />
    <QrcodeProfile>
      <QrcodeProfile.Row title={'이름'} description={profile.name} />
      <QrcodeProfile.Row title={'학번'} description={profile.student_number} />
      <QrcodeProfile.Row title={'학과'} description={profile.department} />
    </QrcodeProfile>
  </Container>
)

export default Qrcode

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  height: calc(100vh - 64px);
  width: 100%;
  background-color: ${color.main};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  color: ${color.white};
`
