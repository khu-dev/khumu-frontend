import { OuterContainer } from '@components/utils/styles/container.styled';
import { AppType } from '@interfaces/app';

import '@assets/css/app.css';
import '@assets/css/scroll.css';
import Header from '@components/header';

const App = ({
  Component,
  pageProps,
}: // router: { pathname }
AppType) => {
  return (
    <>
      <Header />
      <OuterContainer>
        <Component {...pageProps} />
      </OuterContainer>
    </>
  );
};

export default App;
