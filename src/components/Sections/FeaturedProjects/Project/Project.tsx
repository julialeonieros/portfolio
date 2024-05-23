import Box from '@mui/material/Box';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectImg from './ProjectImg/ProjectImg';
import { StyledLink } from './styles';

interface ProjectProps {
  title: string;
  href: string;
  src: string;
  heading: string;
  description: string;
}

const Project = ({ title, href, src, heading, description }: ProjectProps) => {
  return (
    <Box>
      <StyledLink title={title} href={href}>
        <ProjectImg src={src} />
        <ProjectDescription heading={heading} description={description} />
      </StyledLink>
    </Box>
  );
};

export default Project;
