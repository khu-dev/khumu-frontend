import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
import { HeaderType } from '@interfaces/app';
import { HeaderContainer } from './header.styled';
import { theme } from '@components/utils/styles/theme';

const Header = ({ pathname }: HeaderType) => {
  const isMain = pathname === '/';

  return (
    <HeaderContainer isMain={isMain}>
      <AiOutlineQrcode
        size={theme.icon.fontSize}
        style={{ color: theme.color.white, marginRight: '12px' }}
      />
      <AiOutlineBell
        size={theme.icon.fontSize}
        style={{ color: theme.color.white }}
      />
    </HeaderContainer>
  );
};

export default Header;
