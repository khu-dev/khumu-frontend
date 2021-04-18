import { theme } from '@components/utils/theme';
import { HeaderType } from '@interfaces/app';
import { HeaderContainer } from './header.styled';

const Header = ({ pathname }: HeaderType) => {
  const isMain = pathname === '/';
  return <HeaderContainer isMain={isMain}>header tag</HeaderContainer>;
};

export default Header;
