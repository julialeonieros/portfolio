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

export const Section = styled('section')(
  ({ background, theme }: SectionProps) => ({
    backgroundColor: backgroundColors(theme)[background],
  })
);

export const NarrowContentContainer = styled(Box)(() => ({
  maxWidth: '640px',
  padding: '60px 24px 40px',
  margin: 'auto',
}));

export const WideContentContainer = styled(Box)(() => ({
  maxWidth: '800px',
  margin: 'auto',
  padding: '60px 24px 40px',
}));
