import { NarrowContentContainer } from '../../ContenContainers/styles';
import SectionHeading from '../../SectionHeading/SectionHeading';
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
      <NarrowContentContainer>
        <SectionHeading heading='tech' background={true} />
        <StyledList>
          {techSkills.map((skill) => {
            return <StyledListItem key={skill}>{skill}</StyledListItem>;
          })}
        </StyledList>
      </NarrowContentContainer>
    </TechSection>
  );
};

export default Tech;
