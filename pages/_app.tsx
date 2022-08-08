import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import GridWrapper from '../components/gridWrapper';
import Nav from '../components/nav';
import IntroOverlay from '../components/introOverlay';
import gsap from 'gsap';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const tl = gsap.timeline();

    // prevent flashing
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });

    tl.from('.container h1', {
      duration: 1.8,
      delay: 1,
      ease: 'power4.out',
      y: 120,
      skewY: 7,
    })
      .to('.overlay-top', {
        duration: 1.6,
        stagger: 0.4,
        ease: 'expo.inOut',
        height: 0,
      })
      .to('.overlay-bottom', {
        width: 0,
        duration: 1.6,
        delay: -0.8,
        stagger: 0.4,
        ease: 'expo.inOut',
      })
      .to('#intro-overlay', {
        duration: 0,
        css: { display: 'none' },
      })
      .to('#nav-wrap', {
        duration: 0,
        css: { zIndex: 100 },
      })
      .to('#nav-btn', {
        duration: 0,
        css: { zIndex: 200 },
      });
  }, []);

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
