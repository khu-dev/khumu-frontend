import { css, SerializedStyles } from '@emotion/react';

/**
 * @description 어플리케이션의 헤더
 *              path에 따라 커스텀된 헤더 반환
 */

// import { HeaderType } from '@interfaces/app';
// import { HeaderContainer } from './header.styled';
import { theme } from 'src/constants/theme';
import MainHeaderContent from './MainHeader';

interface HeaderProps {
  pathname: string;
}

interface HeaderStyle {
  [key: string]: SerializedStyles;
}

const HeaderContents: any = {
  '/': (props: any) => <MainHeaderContent {...props} />,
  '/qrcode': (props: any) => <MainHeaderContent {...props} />,
};

const Header = ({ pathname, ...rest }: HeaderProps) => {
  return <div css={styles[pathname]}>{HeaderContents[pathname](rest)}</div>;
};

export default Header;

const styles: HeaderStyle = {
  '/': css`
    width: ${theme.padding.width};
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: ${theme.padding.base};
    background-color: ${theme.color.main};
    color: ${theme.color.white};
  `,
};
