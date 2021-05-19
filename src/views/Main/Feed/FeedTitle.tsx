import { BsCaretRightFill } from 'react-icons/bs';

import { STitle } from '@components/Title/Title';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';

export default function FeedTitle({ title }: { title: string }) {
  return (
    <div className={'main-feed-title-container'}>
      <STitle
        size={theme.title.XL}
        css={css`
          color: ${theme.color.white};
        `}
      >
        {title}
      </STitle>
      <BsCaretRightFill color={theme.color.white} size={theme.icon.fontSize} />
    </div>
  );
}
