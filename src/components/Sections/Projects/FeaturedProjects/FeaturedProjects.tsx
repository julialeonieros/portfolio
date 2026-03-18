import Grid from '@mui/material/Unstable_Grid2';
import { projectsData } from '../../../../assets/projects/projectsData';
import Section from '../../Section/Section';
import Project from '../Project/Project';

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
              comment={project.comment}
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
