import { projectsData } from '@assets/projects/projectsData';
import Project from '@components/Sections/Projects/Project/Project';
import Section from '@components/Sections/Section/Section';
import Grid from '@mui/material/Unstable_Grid2';

const FeaturedProject = () => {
  return (
    <Section
      width={'wide'}
      background={'grey'}
      heading={'featured projects'}
      headingBackground={true}
    >
      <Grid container spacing={6} mt={0}>
        {projectsData.map((project) => (
          <Grid key={project.title} xs={12} sm={6}>
            <Project
              title={project.title}
              href={project.href}
              src={project.src}
              heading={project.heading}
              description={project.description}
              tags={project.tags}
              gitHubHref={project.gitHubHref}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default FeaturedProject;
