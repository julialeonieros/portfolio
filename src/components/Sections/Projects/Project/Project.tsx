import Box from '@mui/material/Box';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectImg from './ProjectImg/ProjectImg';
import GitHubTag from './TechTag/GitHubTag/GitHubTag';
import TechTag from './TechTag/TechTag';
import { StyledLink, StyledListItem, TagsContainer } from './styles';

interface ProjectProps {
  title: string;
  href: string;
  src?: string;
  heading: string;
  description: string;
  tags: string[];
  gitHubHref: string;
  sx?: object;
  comment?: string;
}

const Project = ({
  title,
  href,
  src,
  heading,
  description,
  tags,
  gitHubHref,
  sx,
  comment
}: ProjectProps) => {
  return (
    <Box sx={sx}>
      <StyledLink title={title} href={href} target='_blank'>
        {src && <ProjectImg src={src} />}
        <ProjectDescription heading={heading} description={description} comment={comment} />
      </StyledLink>
      <TagsContainer>
        {tags.map((tag) => {
          return (
            <StyledListItem key={tag}>
              <TechTag text={tag} />
            </StyledListItem>
          );
        })}
        <StyledListItem>
          <GitHubTag href={gitHubHref} />
        </StyledListItem>
      </TagsContainer>
    </Box>
  );
};

export default Project;
