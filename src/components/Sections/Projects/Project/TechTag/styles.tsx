import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: '1px 10px 0px',
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  fontSize: '0.73rem',
  color: '#000',
  width: 'fit-content',
}));
