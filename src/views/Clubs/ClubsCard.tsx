import { css } from '@emotion/react';
import * as s from './styled';

const Image = ({ url }) => <s.Image url={url} />;

const Content = ({ children }) => <s.Content>{children}</s.Content>;

const Tag = ({ tag }) => (
  <s.Tag
    css={css`
      margin: 0;
    `}
  >
    {tag}
  </s.Tag>
);

const Name = ({ name, summary }) => (
  <s.NameWrapper>
    <s.Name>{name}</s.Name>
    <s.Summary>{summary}</s.Summary>
  </s.NameWrapper>
);

const Description = ({ description }) => <s.P>{description}</s.P>;

const ClubsCard = ({ children, gap, idx, ...rest }) => (
  <s.Card gap={gap} idx={idx} {...rest}>
    {children}
  </s.Card>
);

ClubsCard.Image = Image;
ClubsCard.Content = Content;
ClubsCard.Tag = Tag;
ClubsCard.Name = Name;
ClubsCard.Description = Description;

export default ClubsCard;
