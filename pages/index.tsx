import type { NextPage } from 'next';
import TextBox from '../components/textBox';
import HeroText from '../components/heroText';
import DownloadBox from '../components/downloadBox';
import PhotoBox from '../components/photoBox';
import VideoBox from '../components/videoBox';

import headshot from '../public/assets/headshot_1.jpg';

const Home: NextPage = () => {
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
      <VideoBox video='/assets/ncl_thumbnail.mp4' area='four' />
      <DownloadBox area='five' theme='dark' />
    </>
  );
};

export default Home;
