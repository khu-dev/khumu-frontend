//@ts-nocheck

import styled from '@emotion/styled'

interface Props {
  title: string
  description: string
}

const Row = ({ title, description }: Props) => (
  <RowContainer>
    <Title>{title}&nbsp;&nbsp;&nbsp;|</Title>
    <Description>{description}</Description>
  </RowContainer>
)

const Profile = ({ children }) => <Container>{children}</Container>

Profile.Row = Row
export default Profile

const Container = styled.div`
  width: 230px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
`

const Description = styled.span`
  font-size: 18px;
  font-weight: 400;
`
