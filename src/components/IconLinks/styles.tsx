import Link from '@mui/material/Link';
import { Theme, styled } from '@mui/material/styles';

interface LinkProps {
  color: string;
  theme: Theme;
}

console.log();

export const StyledLink = styled(Link)(({ color, theme }: LinkProps) => ({
  height: '65px',
  width: '65px',
  border: `solid ${color} 3px`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .4s',
  fontSize: 'xx-large',
  color: color,
  '&:hover': {
    backgroundColor: `${color}`,
    color: `${color === '#fff' ? theme.palette.primary.main : '#fff'}`,
  },

  [theme.breakpoints.down('sm')]: {
    height: '45px',
    width: '45px',
    borderWidth: '2px',
    fontSize: 'x-large',
  },
}));
