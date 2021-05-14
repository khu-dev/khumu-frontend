import { BsCaretRightFill } from 'react-icons/bs';

import { TitleContainer, STitle } from '@components/Title/Title';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';

export default function FeedTitle({ title }: { title: string }) {
  return (
    <TitleContainer isMain>
      <STitle
        size={theme.title.XL}
        css={css`
          color: ${theme.color.white};
        `}
      >
        {title}
      </STitle>
      <BsCaretRightFill color={theme.color.white} size={theme.icon.fontSize} />
    </TitleContainer>
  );
}
