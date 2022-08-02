import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';

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
  return (
    <>
      <BoxOne>this is box one</BoxOne>
      <BoxTwo>this is box two</BoxTwo>
      <BoxThree>this is box three</BoxThree>
      <BoxFour>this is box four</BoxFour>
      <BoxFive>this is box five</BoxFive>
      <BoxSix>this is box six</BoxSix>
    </>
  );
};

export default Home;
