import { MdComment } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { BiBroadcast } from 'react-icons/bi';
import { HiBell } from 'react-icons/hi';
import { IconBaseProps } from 'react-icons/lib';

interface IconsType extends IconBaseProps {
  type: string;
}

// notification icon
export const Icons = ({ type, ...rest }: IconsType) => {
  switch (type) {
    case 'comment': // 댓글
      return <MdComment {...rest} />;
    case 'hot': // 인기글
      return <FaHeart {...rest} />;
    case 'notice': // 공지사항
      return <BiBroadcast {...rest} />;
    default:
      return <HiBell {...rest} />;
  }
};
