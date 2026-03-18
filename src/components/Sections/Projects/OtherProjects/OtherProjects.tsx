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
          key={project.title}
          title={project.title}
          href={project.href}
          heading={project.heading}
          description={project.description}
          comment={project.comment}
          tags={project.tags}
          gitHubHref={project.gitHubHref}
          sx={{ marginBottom: '40px' }}
        />
      ))}
    </Section>
  );
};

export default OtherProjects;
