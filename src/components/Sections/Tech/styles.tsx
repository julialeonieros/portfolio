import { ListItem } from '@mui/material';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const TechSection = styled('section')(() => ({}));

export const StyledList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: 0,
}));

export const StyledListItem = styled(ListItem)(() => ({
  padding: '1px 3px',
  width: 'auto',
}));
