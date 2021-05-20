import { BsCaretRightFill } from 'react-icons/bs';

import { CustomTitle } from '@components/Title';
import { color, title as titleStyle, font } from '@constants/theme';
import { css } from '@emotion/react';

export default function FeedTitle({ title }: { title: string }) {
  return (
    <div className={'main-feed-title-container'}>
      <CustomTitle
        size={titleStyle.XL}
        css={css`
          color: ${color.white};
        `}
      >
        {title}
      </CustomTitle>
      <BsCaretRightFill color={color.white} size={font.iconSize} />
    </div>
  );
}
