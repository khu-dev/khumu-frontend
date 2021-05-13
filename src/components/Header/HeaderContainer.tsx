/**
 * @description 어플리케이션의 헤더
 *              path에 따라 커스텀된 헤더 반환
 */

import MainHeader from './Content/MainHeader';

interface HeaderProps {
  pathname: string;
}

export default function HeaderContainer({ pathname }: HeaderProps) {
  switch (pathname) {
    case '/':
      return <MainHeader />;
    case '/qrcode':
      return <MainHeader />;
    default:
      return <MainHeader />;
  }
}
