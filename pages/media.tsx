import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { color, device, font } from '../data/variables';
import DownloadBox from '../components/downloadBox';
import VideoBox from '../components/videoBox';
import { videoData, headshotsData } from '../data/data';

// import video from '../public/assets/ncl_thumbnail.mp4';

import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lightgallery.css';

const Wrapper = styled.div`
  align-items: center;
  background: ${color.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 1 / 3 / 3;
  justify-content: center;
  padding: 25px 20px;
  position: relative;
  z-index: 15;
  @media ${device.phone} {
    grid-area: 1 / 1 / 4 / 3;
  }
  h2.gallery-header {
    font-size: ${font.heading};
    font-weight: ${font.bold};
    margin-bottom: 20px;
    width: 100%;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
    width: 100%;
    a.thumb {
      display: block;
      margin: 10px 5px;
      max-height: 125px;
      max-width: 125px;
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      headshots: headshotsData,
      videos: videoData,
    },
  };
};

interface Props {
  headshots: HeadshotDataProps[];
  videos: VideoDataProps[];
}

const Media: NextPage<Props> = ({ headshots, videos }) => {
  return (
    <>
      <Wrapper>
        <h2 className='gallery-header'>Headshots</h2>
        <LightGallery elementClassNames='gallery gallery--photo'>
          {headshots.map((item: HeadshotDataProps) => (
            <a data-src={item.path} key={item.index} className='thumb'>
              <Image
                src={item.path}
                width={125}
                height={125}
                objectFit='cover'
                objectPosition='top center'
                alt=''
              />
            </a>
          ))}
        </LightGallery>
        <h2 className='gallery-header'>Covers</h2>
        <LightGallery
          elementClassNames='gallery gallery--video'
          plugins={[lgVideo]}
          autoplayVideoOnSlide
        >
          {videos.map((item: VideoDataProps) => (
            <a data-src={item.videoUrl} key={item.index} className='thumb'>
              <Image src={item.thumbUrl} width={125} height={125} alt='' />
            </a>
          ))}
        </LightGallery>
      </Wrapper>
      <VideoBox video='#' area='four' />
      <DownloadBox area='five' theme='dark' />
    </>
  );
};

export default Media;
