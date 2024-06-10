import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import { projectsData } from '../../../../assets/projects/projectsData';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import { Section, WideContentContainer } from '../../styles';
import Project from '../Project/Project';

const FeaturedProject = () => {
  const theme = useTheme();
  return (
    <Section theme={theme} background={'grey'}>
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
    </Section>
  );
};

export default FeaturedProject;
