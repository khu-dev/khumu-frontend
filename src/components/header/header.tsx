import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
import { HeaderType } from '@interfaces/app';
import { HeaderContainer } from './header.styled';

const Header = ({ pathname }: HeaderType) => {
  const isMain = pathname === '/';
  return (
    <HeaderContainer isMain={isMain}>
      <AiOutlineQrcode
        size={24}
        style={{ color: '#fff', marginRight: '12px' }}
      />
      <AiOutlineBell size={24} style={{ color: '#fff' }} />
    </HeaderContainer>
  );
};

export default Header;
