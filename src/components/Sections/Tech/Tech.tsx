import SectionHeading from '../../SectionHeading/SectionHeading';
import { TextContainer } from '../Introduction/styles';
import { StyledList, StyledListItem, TechSection } from './styles';

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
    <TechSection>
      <TextContainer>
        <SectionHeading heading='tech' background={true} />
        <StyledList>
          {techSkills.map((skill) => {
            return <StyledListItem key={skill}>{skill}</StyledListItem>;
          })}
        </StyledList>
      </TextContainer>
    </TechSection>
  );
};

export default Tech;
