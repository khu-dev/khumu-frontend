import '@assets/css/app.css';
import Header from '@components/header';
import { MainContainer } from '@components/utils/main.styled';
import { AppType } from '@interfaces/app';

const App = ({ Component, pageProps, router: { pathname } }: AppType) => {
  return (
    <MainContainer>
      <Header name={pathname} />
      <Component {...pageProps} />
    </MainContainer>
  );
};

export default App;
