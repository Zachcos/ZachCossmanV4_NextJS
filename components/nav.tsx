import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { color, font, device } from '../data/variables';
import Link from 'next/link';

const NavWrapper = styled(motion.div)`
  align-items: center;
  background: ${color.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  min-width: 70px;
  min-height: 70px;
  position: fixed;
  top: 0;
`;

const NavIcon = styled(motion.div)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 70px;
  z-index: 100;
  .line-wrapper {
    width: 35px;
    span {
      background: ${color.light};
      border-radius: 10px;
      display: block;
      height: 3px;
      position: relative;
      transition: all 0.2s ease-out;
      width: 30px;
      &:first-child {
        margin-bottom: 8px;
      }
      &:last-child {
        width: 23px;
      }
      &.open {
        &:first-child {
          transform: rotate(-45deg);
          top: 1px;
          width: 17px;
        }
        &:last-child {
          transform: rotate(45deg);
          width: 17px;
        }
      }
    }
  }
`;

const LinksWrapper = styled(motion.div)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: ${font.subheading};
  height: 50vh;
  justify-content: space-around;
  padding: 0 50px;
  position: relative;
  width: 66.666vw;
  z-index: 11;
  .link {
    font-weight: ${font.medium};
    text-transform: uppercase;
    a {
      color: ${color.light};
      text-decoration: none;
      transition: color 0.15s ease-out;
      &:hover {
        color: ${color.med};
      }
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
  @media ${device.phone} {
    height: 100vh;
    padding: 50px 0;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector('html')!.style.overflow = 'hidden';
    } else if (!isOpen) {
      document.querySelector('html')!.style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <LayoutGroup>
      <NavWrapper layout id='nav-wrap'>
        <NavIcon id='nav-btn' onClick={() => setIsOpen(!isOpen)}>
          <motion.div layout className='line-wrapper'>
            <span className={isOpen ? 'open' : ''} />
            <span className={isOpen ? 'open' : ''} />
          </motion.div>
        </NavIcon>
        <AnimatePresence>
          {isOpen && <Menu setIsOpen={setIsOpen} />}
        </AnimatePresence>
      </NavWrapper>
    </LayoutGroup>
  );
};

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ setIsOpen }: Props) {
  return (
    <LinksWrapper
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className='link'>
        <Link href='/'>
          <a onClick={() => setIsOpen(false)}>home</a>
        </Link>
      </div>
      <div className='link'>
        <Link href='/about'>
          <a onClick={() => setIsOpen(false)}>about</a>
        </Link>
      </div>
      <div className='link'>
        <Link href='/media'>
          <a onClick={() => setIsOpen(false)}>media</a>
        </Link>
      </div>
      <div className='link'>
        <Link href='/contact'>
          <a onClick={() => setIsOpen(false)}>contact</a>
        </Link>
      </div>
    </LinksWrapper>
  );
}

export default Nav;
