import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode } from 'react';
import { StyledLink } from '../Projects/Project/styles';
import { ArticleImage, DateWritten } from './styles';

interface ArticleProps {
  href: string;
  src: string;
  dateWritten: string;
  heading: ReactNode;
  description: string;
}

const Article = ({
  href,
  src,
  dateWritten,
  heading,
  description,
}: ArticleProps) => {
  return (
    <Grid xs={12} sm={6}>
      <StyledLink title='link to article' href={href}>
        <ArticleImage src={src} />
        <DateWritten>{dateWritten}</DateWritten>
        <Typography variant='h4'>{heading}</Typography>
        <Typography>{description}</Typography>
      </StyledLink>
    </Grid>
  );
};

export default Article;
