import { BsCaretRightFill } from 'react-icons/bs';

import { color, font } from '@constants/theme';

export default function FeedTitle({ title }: { title: string }) {
  return (
    <div className={'main-feed-title-container'}>
      <div className={'main-feed-title'}>{title}</div>
      <BsCaretRightFill color={color.white} size={font.iconSize} />
    </div>
  );
}
