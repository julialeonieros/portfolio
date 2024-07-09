import Grid from '@mui/material/Unstable_Grid2';
import tipsImage from '../../../assets/desktop.jpg';
import nativeImage from '../../../assets/mobile_app.jpg';
import Section from '../Section/Section';
import Article from './Article';

const Articles = () => {
  return (
    <Section
      width={'narrow'}
      background={'white'}
      heading={'articles'}
      headingBackground={true}
    >
      <Grid container spacing={8} mt={3}>
        <Article
          href={
            'https://julia-leonie-ros.medium.com/tips-for-shy-coders-196c1779bfc9'
          }
          src={tipsImage}
          alt={'A desk with a laptop and lamp'}
          dateWritten={'march 2021'}
          heading={
            <>
              Tips for shy coders:{' '}
              <i>Some thoughts after two months on a frontend bootcamp</i>
            </>
          }
          description='So, about six months ago I got an email from Technigo telling me
        they’ve accepted me into their bootcamp; 24 weeks of learning
        HTML/CSS, JavaScript, React, JSX (and a bunch of things I’d never
        even heard of), at a very high pace, with the goal of completely
        changing career ...'
        />
        <Article
          href={'https://www.technigo.io/explained/what-is-react-native'}
          src={nativeImage}
          alt={'A hand holding a mobile phone over a colorful background'}
          dateWritten={'2021'}
          heading={'What is React Native?'}
          description={`An introduction to React Native. Written for Technigo and Kry's platform "Explained"; articles explaining 
        technical concepts for beginners.`}
        />
      </Grid>
    </Section>
  );
};

export default Articles;
