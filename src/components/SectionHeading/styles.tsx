import { Theme, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface ColorProps {
  background: boolean;
  theme: Theme;
}

export const Background = styled(Box, {
  shouldForwardProp: (props) => props !== 'background',
})(({ theme, background }: ColorProps) => ({
  padding: '4px 8px',
  backgroundColor: background ? theme.palette.primary.main : 'transparent',
  display: 'inline-block',
  margin: 'auto',
}));

export const StyledHeading = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '1.4rem',
  textTransform: 'uppercase',
})) as typeof Typography;
