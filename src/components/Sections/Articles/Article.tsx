import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { ReactNode } from 'react';
import { StyledLink } from '../Projects/Project/styles';
import { ArticleHeading, ArticleImage, DateWritten } from './styles';

interface ArticleProps {
  href: string;
  src: string;
  dateWritten: string;
  heading: ReactNode;
  description: string;
  alt: string;
}

const Article = ({
  href,
  src,
  dateWritten,
  heading,
  description,
  alt,
}: ArticleProps) => {
  return (
    <Grid xs={12} sm={6}>
      <StyledLink title={'link to article'} href={href}>
        <ArticleImage src={src} alt={alt} />
        <DateWritten>{dateWritten}</DateWritten>
        <ArticleHeading component='h3'>{heading}</ArticleHeading>
        <Typography>{description}</Typography>
      </StyledLink>
    </Grid>
  );
};

export default Article;
