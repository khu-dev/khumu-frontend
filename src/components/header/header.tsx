/**
 * @description 어플리케이션의 헤더
 *              path에 따라 커스텀된 헤더 반환
 */

import React from 'react';
// import { HeaderType } from '@interfaces/app';
// import { HeaderContainer } from './header.styled';
import { theme } from '@components/utils/styles/theme';
import MainHeaderContent from './MainHeader';
import { CSSProperties } from 'styled-components';

interface HeaderProps {
  pathname: string;
}

interface HeaderStyle {
  [key: string]: CSSProperties;
}

const HeaderContents: any = {
  '/': (props: any) => <MainHeaderContent {...props} />,
  '/qrcode': (props: any) => <MainHeaderContent {...props} />,
};

const Header = ({ pathname, ...rest }: HeaderProps) => {
  return <div style={styles[pathname]}>{HeaderContents[pathname](rest)}</div>;
};

export default Header;

const styles: HeaderStyle = {
  '/': {
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
