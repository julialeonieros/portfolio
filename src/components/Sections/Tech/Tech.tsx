import { useTheme } from '@mui/material/styles';
import SectionHeading from '../../SectionHeading/SectionHeading';
import { NarrowContentContainer, Section } from '../styles';
import { StyledList, StyledListItem } from './styles';

const Tech = () => {
  const techSkills = [
    'HTML,',
    'CSS,',
    'JavaScript,',
    'TypeScript,',
    'React,',
    'Node.js,',
    'Mongo DB,',
    'Web Accessibility,',
    'API:s,',
    'mob-programming,',
    'pair-programming,',
    'Git,',
    'Material UI',
  ];

  const theme = useTheme();

  return (
    <Section theme={theme} background={'white'}>
      <NarrowContentContainer>
        <SectionHeading heading='tech' background={true} />
        <StyledList>
          {techSkills.map((skill) => {
            return <StyledListItem key={skill}>{skill}</StyledListItem>;
          })}
        </StyledList>
      </NarrowContentContainer>
    </Section>
  );
};

export default Tech;
