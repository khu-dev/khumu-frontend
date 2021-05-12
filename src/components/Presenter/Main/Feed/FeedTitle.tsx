import { BsCaretRightFill } from 'react-icons/bs';

import { TitleContainer, XLTitle } from '@components/utils/styles/Title';
import { theme } from '@constants/theme';

export default function FeedTitle({ title }: { title: string }) {
  return (
    <TitleContainer isMain>
      <XLTitle color={theme.color.white}>{title}</XLTitle>
      <BsCaretRightFill color={theme.color.white} size={theme.icon.fontSize} />
    </TitleContainer>
  );
}
