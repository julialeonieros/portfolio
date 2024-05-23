import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
}));
