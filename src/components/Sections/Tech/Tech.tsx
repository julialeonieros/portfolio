import Section from '@components/Sections/Section/Section';
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

  return (
    <Section
      width='narrow'
      background='white'
      heading='tech'
      headingBackground={true}
    >
      <StyledList>
        {techSkills.map((skill) => {
          return <StyledListItem key={skill}>{skill}</StyledListItem>;
        })}
      </StyledList>
    </Section>
  );
};

export default Tech;
