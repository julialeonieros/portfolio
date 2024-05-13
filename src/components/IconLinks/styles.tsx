import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  gap: theme.spacing(1),
}));

export const IconLink = styled(Link)(({ theme }) => ({
  height: '60px',
  width: '60px',
  border: `solid ${theme.palette.primary.main} 3px`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .4s',
  fontSize: 'xx-large',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },

  [theme.breakpoints.down('md')]: {
    height: '40px',
    width: '40px',
    borderWidth: '2px',
    fontSize: 'x-large',
  },
}));
