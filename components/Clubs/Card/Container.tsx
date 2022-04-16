import { color } from '@constants/theme'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

import Content from './Content'
import Description from './Description'
import Image from './Image'
import Name from './Name'
import Tag from './Tag'

interface Props {
  children: ReactNode
}

const ClubsCard = ({ children }: Props) => <Container>{children}</Container>

ClubsCard.Image = Image
ClubsCard.Content = Content
ClubsCard.Tag = Tag
ClubsCard.Name = Name
ClubsCard.Description = Description

export default ClubsCard

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 150px);
  box-shadow: -1px 1px 12px -4px rgba(0, 0, 0, 0.3);
  border: 1px solid ${color.main};
  border-radius: 24px;
  border-bottom-right-radius: 0;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`
