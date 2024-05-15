import { Typography } from '@mui/material';
import SectionHeading from '../../SectionHeading/SectionHeading';
import { TextContainer } from '../Introduction/styles';
import { TechSection } from './styles';

const Tech = () => {
  return (
    <TechSection>
      <TextContainer>
        <SectionHeading heading='tech' background={true} />
        <Typography textAlign='center'>
          HTML, CSS, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo
          DB, Web Accessibility, API:s, mob-programming, pair-programming, Git,
          Material UI, TypeScript
        </Typography>
      </TextContainer>
    </TechSection>
  );
};

export default Tech;
