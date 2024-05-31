import { Typography } from '@mui/material';

interface DescriptionProps {
  heading: string;
  description: string;
}

const ProjectDescription = ({ heading, description }: DescriptionProps) => {
  return (
    <>
      <Typography variant='h3'>{heading}</Typography>
      <Typography>{description}</Typography>
    </>
  );
};

export default ProjectDescription;
