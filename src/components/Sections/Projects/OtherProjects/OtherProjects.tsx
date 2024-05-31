import { OtherProjectsData } from '../../../../assets/projects/otherProjectsData';
import { WideContentContainer } from '../../../ContenContainers/styles';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import Project from '../Project/Project';
import { OtherProjectsSection } from './styles';

const OtherProjects = () => {
  return (
    <OtherProjectsSection>
      <WideContentContainer sx={{ paddingTop: '35px' }}>
        <SectionHeading
          heading='other projects'
          background={false}
        ></SectionHeading>
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
    </OtherProjectsSection>
  );
};

export default OtherProjects;
