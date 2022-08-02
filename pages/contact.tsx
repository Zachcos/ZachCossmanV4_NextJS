import Image from 'next/image';
import { color } from '../data/variables';
import HeroText from '../components/heroText';
import TextBox from '../components/textBox';
import DownloadBox from '../components/downloadBox';
import PhotoBox from '../components/photoBox';

import headshot from '../public/assets/headshot3.jpg';
import ASALogo from '../public/assets/ASAlogo.png';
import ZCDLogo from '../public/assets/ZCDlogo.svg';

const Contact = () => {
  const agentDetails = {
    heading: "I'm represented",
    subheading: 'by Ann Steele Agency',
    subnote: '',
  };
  const designDetails = {
    heading: 'I made this site',
    subheading: 'You can have one, too',
    subnote: '',
  };

  return (
    <>
      <HeroText text='get in touch' area='one' />
      <TextBox area='two' content={agentDetails} theme='light'>
        <a
          href='https://annsteeleagency.com'
          target='_blank'
          rel='noreferrer'
          style={{ color: `${color.dark}` }}
        >
          <div className='img-container'>
            <div className='img-container--inner'>
              <Image
                src={ASALogo}
                layout='responsive'
                width={90}
                height={75}
                alt=''
              />
            </div>
            <span className='asa emphasis'>Visit ASA.com</span>
          </div>
        </a>
      </TextBox>
      <DownloadBox area='three' theme='dark' />
      <TextBox area='four' content={designDetails} theme='accent'>
        <a
          href='https://zachcossmandesigns.com'
          target='_blank'
          rel='noreferrer'
          style={{ color: `${color.dark}` }}
        >
          <div className='img-container'>
            <div className='img-container--inner'>
              <Image
                src={ZCDLogo}
                layout='responsive'
                width={90}
                height={75}
                alt=''
              />
            </div>
            <span className='zcd emphasis'>Zach Cossman Designs</span>
          </div>
        </a>
      </TextBox>
      <PhotoBox image={headshot} area='five' />
    </>
  );
};

export default Contact;
