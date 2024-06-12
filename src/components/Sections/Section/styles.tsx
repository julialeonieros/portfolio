import Box from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';

interface SectionProps {
  background: 'white' | 'grey' | 'pink';
  theme: Theme;
}

const backgroundColors = (theme: Theme) => ({
  white: theme.palette.background.paper,
  grey: theme.palette.background.default,
  pink: theme.palette.secondary.dark,
});

export const StyledSection = styled('section')(
  ({ background, theme }: SectionProps) => ({
    backgroundColor: backgroundColors(theme)[background],
  })
);

interface ContainerProps {
  width: string;
}

export const ContentContainer = styled(Box)(({ width }: ContainerProps) => ({
  maxWidth: width === 'narrow' ? '640px' : '800px',
  margin: 'auto',
  padding: '60px 24px 40px',
}));
