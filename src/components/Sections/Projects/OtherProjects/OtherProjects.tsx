import { useTheme } from '@mui/material/styles';
import { OtherProjectsData } from '../../../../assets/projects/otherProjectsData';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import { Section, WideContentContainer } from '../../styles';
import Project from '../Project/Project';

const OtherProjects = () => {
  const theme = useTheme();
  return (
    <Section theme={theme} background={'grey'}>
      <WideContentContainer sx={{ paddingTop: '35px' }}>
        <SectionHeading heading='other projects' background={false} />
        {OtherProjectsData.map((project) => (
          <Project
            title={project.title}
            href={project.href}
            heading={project.heading}
            description={project.description}
            tags={project.tags}
            gitHubHref={project.gitHubHref}
            sx={{ marginTop: '40px' }}
          />
        ))}
      </WideContentContainer>
    </Section>
  );
};

export default OtherProjects;
