import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import GridWrapper from '../components/gridWrapper';
import Nav from '../components/nav';
import IntroOverlay from '../components/introOverlay';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <>
      <GlobalStyle />
      <GridWrapper>
        <IntroOverlay />
        <Nav />
        <Component {...pageProps} />
      </GridWrapper>
    </>
  );
}

export default MyApp;
