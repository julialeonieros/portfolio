import { Typography } from '@mui/material';

interface DescriptionProps {
  heading: string;
  description: string;
  comment?: string;
}

const ProjectDescription = ({ heading, description, comment }: DescriptionProps) => {
  return (
    <>
      <Typography variant='h3'>{heading}</Typography>
      <Typography>{description}</Typography>
      {comment && <Typography sx={{mt: 1.1, fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '25px'}}>* {comment}</Typography>}
    </>
  );
};

export default ProjectDescription;
