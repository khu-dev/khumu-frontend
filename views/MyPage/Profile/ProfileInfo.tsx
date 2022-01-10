import { FC } from 'react'
import styled from '@emotion/styled'

import { box, color } from '@constants/theme'

interface Props {
  name: string
  department: string
  studentNumber: string
}

const ProfileInfo: FC<Props> = ({ name, department, studentNumber }) => (
  <Container>
    <div>{name}</div>
    <div>{department}</div>
    <div>{studentNumber}</div>
  </Container>
)

export default ProfileInfo

const Container = styled.div`
  height: 67.5px;
  flex: 1;
  margin-left: ${box.margin};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > div {
    color: ${color.white};
    font-size: 14px;
  }
`
