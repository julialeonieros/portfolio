import { Typography } from '@mui/material';
import { ContentContainer } from './styles';

interface DescriptionProps {
  heading: string;
  description: string;
}

const ProjectDescription = ({ heading, description }: DescriptionProps) => {
  return (
    <ContentContainer>
      <Typography variant='h3'>{heading}</Typography>
      <Typography>{description}</Typography>
    </ContentContainer>
  );
};

export default ProjectDescription;
