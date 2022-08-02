import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import GridWrapper from '../components/gridWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GridWrapper>
        <Component {...pageProps} />
      </GridWrapper>
    </>
  );
}

export default MyApp;
