import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';
import TextBox from '../components/textBox';
import HeroText from '../components/heroText';
import DownloadBox from '../components/downloadBox';
import PhotoBox from '../components/photoBox';
import VideoBox from '../components/videoBox';

import headshot from '../public/assets/headshot.jpg';
// import video from '../public/assets/ncl_thumbnail.mp4';

const BoxOne = styled.div`
  grid-area: 'one';
  background: red;
`;
const BoxTwo = styled.div`
  grid-area: 'two';
  background: blue;
`;
const BoxThree = styled.div`
  grid-area: 'three';
  background: green;
`;
const BoxFour = styled.div`
  grid-area: 'four';
  background: salmon;
`;
const BoxFive = styled.div`
  grid-area: 'five';
  background: grey;
`;
const BoxSix = styled.div`
  grid-area: 'six';
  background: yellow;
`;

const Home: NextPage = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('this is the vh value: ', vh);
  });

  const gig = {
    heading: 'Footloose',
    subheading: 'Norwegian Cruise Lines',
    subnote: 'Mon, May 23th',
  };

  const blurb =
    'Zach is currently playing Ren McCormack in Footloose on the Norwegian Joy.';
  return (
    <>
      <HeroText text='Zach Cossman' area='one' />
      <PhotoBox image={headshot} area='two' />
      <TextBox area='three' content={gig} theme=''>
        <p className='body'>
          <br />
          {blurb}
          <br />
        </p>
      </TextBox>
      {/* <VideoBox video={video} area='four' /> */}
      <VideoBox video='#' area='four' />
      <DownloadBox area='five' theme='dark' />
    </>
  );
};

export default Home;
