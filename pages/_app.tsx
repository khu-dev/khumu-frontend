import '@assets/css/app.css';
import { MainContainer } from '@components/utils/main.styled';

interface AppType {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppType) => (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer>
);

export default App;
