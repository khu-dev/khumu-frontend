/**
 * @description 어플리케이션의 헤더
 *              path에 따라 커스텀된 헤더 반환
 */

import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
// import { HeaderType } from '@interfaces/app';
import { HeaderContainer } from './header.styled';
import { theme } from '@components/utils/styles/theme';
import Head from 'next/head';

const Header = () =>
  // { pathname }: HeaderType
  {
    // const isMain = pathname === '/';

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <HeaderContainer isMain={true}>
          <AiOutlineQrcode
            size={theme.icon.fontSize}
            style={{ color: theme.color.white, marginRight: '12px' }}
          />
          <AiOutlineBell
            size={theme.icon.fontSize}
            style={{ color: theme.color.white }}
          />
        </HeaderContainer>
      </>
    );
  };

export default Header;
