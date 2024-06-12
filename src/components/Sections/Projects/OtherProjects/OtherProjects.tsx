import { OtherProjectsData } from '../../../../assets/projects/otherProjectsData';
import Section from '../../Section/Section';
import Project from '../Project/Project';

const OtherProjects = () => {
  return (
    <Section
      width={'wide'}
      background={'grey'}
      heading={'other projects'}
      headingBackground={false}
    >
      {OtherProjectsData.map((project) => (
        <Project
          title={project.title}
          href={project.href}
          heading={project.heading}
          description={project.description}
          tags={project.tags}
          gitHubHref={project.gitHubHref}
          sx={{ marginTop: '40px' }}
          key={project.title}
        />
      ))}
    </Section>
  );
};

export default OtherProjects;
