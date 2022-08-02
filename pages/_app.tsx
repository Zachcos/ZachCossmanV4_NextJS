import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import GridWrapper from '../components/gridWrapper';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GridWrapper>
        <Nav />
        <Component {...pageProps} />
      </GridWrapper>
    </>
  );
}

export default MyApp;
