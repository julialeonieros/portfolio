import Grid from '@mui/material/Unstable_Grid2';
import { projectsData } from '../../../assets/projects/projectsData';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Project from './Project/Project';
import { FeaturedProjectsSection } from './styles';

const FeaturedProject = () => {
  return (
    <FeaturedProjectsSection>
      <SectionHeading heading='featured projects' background={true} />
      <Grid container spacing={6} sx={{ width: '850px', margin: 'auto' }}>
        {projectsData.map((project) => (
          <Grid key={project.title} xs={12} md={6}>
            <Project
              title={project.title}
              href={project.href}
              src={project.src}
              heading={project.heading}
              description={project.description}
              tags={project.tags}
            />
          </Grid>
        ))}
      </Grid>
    </FeaturedProjectsSection>
  );
};

export default FeaturedProject;
