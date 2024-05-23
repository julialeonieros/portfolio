import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

export const TechSection = styled('section')(() => ({
  padding: '47px 43px',
}));

export const StyledList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: 0,
}));
