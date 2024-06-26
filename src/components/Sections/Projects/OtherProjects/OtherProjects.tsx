import { OtherProjectsData } from '@assets/projects/otherProjectsData';
import Project from '@components/Sections/Projects/Project/Project';
import Section from '@components/Sections/Section/Section';

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
          key={project.title}
          title={project.title}
          href={project.href}
          heading={project.heading}
          description={project.description}
          tags={project.tags}
          gitHubHref={project.gitHubHref}
          sx={{ marginBottom: '40px' }}
        />
      ))}
    </Section>
  );
};

export default OtherProjects;
