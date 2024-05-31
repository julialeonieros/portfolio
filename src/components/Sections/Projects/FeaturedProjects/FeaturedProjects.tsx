import Grid from '@mui/material/Unstable_Grid2';
import { projectsData } from '../../../../assets/projects/projectsData';
import { WideContentContainer } from '../../../ContenContainers/styles';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import Project from '../Project/Project';
import { FeaturedProjectsSection } from './styles';

const FeaturedProject = () => {
  return (
    <FeaturedProjectsSection>
      <WideContentContainer>
        <SectionHeading heading='featured projects' background={true} />
        <Grid container spacing={6} mt={2}>
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
      </WideContentContainer>
    </FeaturedProjectsSection>
  );
};

export default FeaturedProject;
