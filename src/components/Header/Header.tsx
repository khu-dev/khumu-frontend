/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSProperties } from 'react';

/**
 * @description 어플리케이션의 헤더
 *              path에 따라 커스텀된 헤더 반환
 */

import { theme } from 'src/constants/theme';
import { commonStyle } from './commonStyle';
import MainHeaderContent from './MainHeader';

interface HeaderProps {
  pathname: string;
}

function HeaderContents(pathname: string) {
  switch (pathname) {
    case '/':
      return <MainHeaderContent />;
    case '/qrcode':
      return <MainHeaderContent />;
    default:
      return <MainHeaderContent />;
  }
}

export default function Header({ pathname }: HeaderProps) {
  return (
    <div
      style={
        css`
          ${commonStyle};
          justify-content: flex-end;
          background-color: ${theme.color.main};
          color: ${theme.color.white};
        ` as CSSProperties
      }
    >
      {HeaderContents(pathname)}
    </div>
  );
}
