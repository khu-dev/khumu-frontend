import '@assets/css/app.css';
import { MainContainer } from '@components/utils/main.styled';
import { AppType } from '@interfaces/app';

const App = ({ Component, pageProps, router: { pathname } }: AppType) => {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
};

export default App;
