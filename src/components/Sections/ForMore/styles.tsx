import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 'fit-content',
  margin: 'auto',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(3),
  gap: theme.spacing(4),
}));
