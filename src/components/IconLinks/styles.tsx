import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export const IconLink = styled(Link)(({ theme }) => ({
  height: '60px',
  width: '60px',
  border: `solid #fff 3px`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .4s',
  fontSize: 'xx-large',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.down('sm')]: {
    height: '45px',
    width: '45px',
    borderWidth: '2px',
    fontSize: 'x-large',
  },
}));
