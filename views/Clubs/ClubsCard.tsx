//@ts-nocheck

import { css } from '@emotion/react'
import * as s from './styled'

const Image = ({ url }) => <s.Image url={url} />

const Content = ({ children }) => <s.Content>{children}</s.Content>

const Tag = ({ tag }) => (
  <s.Tag
    css={css`
      margin: 0;
    `}
  >
    {tag}
  </s.Tag>
)

const Name = ({ name, summary, fontSize }) => (
  <s.NameWrapper>
    <s.Name>{name}</s.Name>
    <s.Summary fontSize={fontSize}>{summary}</s.Summary>
  </s.NameWrapper>
)

const Description = ({ description }) => (
  <s.P
    dangerouslySetInnerHTML={{
      __html: description,
    }}
  ></s.P>
)

const ClubsCard = ({ children, ...rest }) => (
  <s.Card {...rest}>{children}</s.Card>
)

ClubsCard.Image = Image
ClubsCard.Content = Content
ClubsCard.Tag = Tag
ClubsCard.Name = Name
ClubsCard.Description = Description

export default ClubsCard
