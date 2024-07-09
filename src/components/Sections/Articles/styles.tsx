import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const ArticleImage = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  overflow: 'hidden',
}));

export const DateWritten = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  marginTop: theme.spacing(2),
}));
