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
export const ArticleHeading = styled(Typography)(({ theme }) => ({
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  fontWeight: 700,
  fontSize: '1.3rem',
  color: theme.palette.primary.main,
  marginTop: '0px',
  lineHeight: '29px',
})) as typeof Typography;
