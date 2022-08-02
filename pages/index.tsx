import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';
import TextBox from '../components/textBox';
import HeroText from '../components/heroText';
import DownloadBox from '../components/downloadBox';

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
      <BoxTwo>this is box two</BoxTwo>
      <TextBox area='three' content={gig} theme=''>
        <p className='body'>
          <br />
          {blurb}
          <br />
        </p>
      </TextBox>
      <BoxFour>this is box four</BoxFour>
      <DownloadBox area='five' theme='dark' />
    </>
  );
};

export default Home;
