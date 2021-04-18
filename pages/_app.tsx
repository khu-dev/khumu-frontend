import '@assets/css/app.css';
import Header from '@components/header';
import { OuterContainer } from '@components/utils/container.styled';
import { AppType } from '@interfaces/app';

const App = ({ Component, pageProps, router: { pathname } }: AppType) => {
  return (
    <OuterContainer>
      <Header pathname={pathname} />
      <Component {...pageProps} />
    </OuterContainer>
  );
};

export default App;
