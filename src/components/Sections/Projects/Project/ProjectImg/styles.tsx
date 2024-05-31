import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ImgWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: '220px',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    height: '170px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '212px',
  },
}));

export const StyledImg = styled('img')(() => ({
  position: 'absolute',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: 'brightness(40%)',
  transition: 'transform.5s',
  '&:hover': {
    transform: `scale(1.1) translateZ(1px)`,
    filter: 'brightness(100%)',
  },
}));
