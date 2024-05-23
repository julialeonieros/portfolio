import Box from '@mui/material/Box';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectImg from './ProjectImg/ProjectImg';
import TechTag from './TechTag/TechTag';
import { StyledLink, StyledListItem, TagsContainer } from './styles';

interface ProjectProps {
  title: string;
  href: string;
  src: string;
  heading: string;
  description: string;
  tags: string[];
}

const Project = ({
  title,
  href,
  src,
  heading,
  description,
  tags,
}: ProjectProps) => {
  return (
    <Box>
      <StyledLink title={title} href={href}>
        <ProjectImg src={src} />
        <ProjectDescription heading={heading} description={description} />
      </StyledLink>
      <TagsContainer>
        {tags.map((tag) => {
          return (
            <StyledListItem key={tag}>
              <TechTag text={tag} />
            </StyledListItem>
          );
        })}
      </TagsContainer>
    </Box>
  );
};

export default Project;
