import styled from '@emotion/styled'
import { FC } from 'react'

interface Props {
  text: string
}

export const Empty: FC<Props> = ({ text }) => <Container>{text}</Container>

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
