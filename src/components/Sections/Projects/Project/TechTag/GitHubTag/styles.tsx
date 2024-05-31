import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: '0px 10px',
  color: '#000',
  borderBottom: 'solid 1px',
  width: 'fit-content',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));
