import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const NarrowContentContainer = styled(Box)(() => ({
  maxWidth: '640px',
  padding: '60px 24px 24px',
  margin: 'auto',
}));

export const WideContentContainer = styled(Box)(() => ({
  maxWidth: '800px',
  margin: 'auto',
  padding: '60px 24px 24px',
}));
