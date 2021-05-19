import { BsCaretRightFill } from 'react-icons/bs';

import { CustomTitle } from '@components/Title';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';

export default function FeedTitle({ title }: { title: string }) {
  return (
    <div className={'main-feed-title-container'}>
      <CustomTitle
        size={theme.title.XL}
        css={css`
          color: ${theme.color.white};
        `}
      >
        {title}
      </CustomTitle>
      <BsCaretRightFill color={theme.color.white} size={theme.icon.fontSize} />
    </div>
  );
}
