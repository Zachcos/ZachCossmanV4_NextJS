import React from 'react';
import styled from 'styled-components';
import { color, font, device } from '../data/variables';

const NameBox = styled.div`
  align-items: center;
  background: ${color.med};
  display: flex;
  justify-content: center;
  .container {
    overflow: hidden;
    position: relative;
    z-index: 10;
    h1 {
      font-size: ${font.display};
      font-weight: ${font.bold};
      text-transform: uppercase;
      @media ${device.phone} {
        font-size: 3rem;
      }
      @media ${device.SMphone} {
        font-size: 2.4rem;
      }
    }
  }
`;

interface Props {
  area: string;
  text: string;
}

const HeroText = ({ area, text }: Props) => {
  return (
    <NameBox style={{ gridArea: area }} id='heroText'>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </NameBox>
  );
};

export default HeroText;
