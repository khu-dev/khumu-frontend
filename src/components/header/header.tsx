/**
 * @description 어플리케이션의 헤더
 *              path에 따라 커스텀된 헤더 반환
 */

import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
// import { HeaderType } from '@interfaces/app';
import { HeaderContainer } from './header.styled';
import { theme } from '@components/utils/styles/theme';

const Header = () => {
  return (
    <div style={styles.container}>
      <AiOutlineQrcode
        size={theme.icon.fontSize}
        style={{ color: theme.color.white, marginRight: '12px' }}
      />
      <AiOutlineBell
        size={theme.icon.fontSize}
        style={{ color: theme.color.white }}
      />
    </div>
  );
};

export default Header;

const styles = {
  container: {
    width: theme.padding.width,
    height: '5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.padding.base,
    backgroundColor: theme.color.main,
    color: theme.color.white,
  },
};
