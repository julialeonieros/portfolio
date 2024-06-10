import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const ArticlesSection = styled('section')(() => ({}));

export const Italic = styled('span')(() => ({
  fontStyle: 'italic',
}));

export const ArticleImage = styled('img')(() => ({
  width: '100%',
  height: '210px',
  overflow: 'hidden',
}));

export const DateWritten = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  marginTop: theme.spacing(2),
}));
