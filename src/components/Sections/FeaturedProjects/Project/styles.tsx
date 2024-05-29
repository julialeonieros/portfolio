import { ListItem } from '@mui/material';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const TagsContainer = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: 6,
  padding: 0,
}));

export const StyledListItem = styled(ListItem)(() => ({
  width: 'auto',
  padding: 0,
}));
