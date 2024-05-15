import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Background, StyledHeading } from './styles';

interface SectionHeadingProps {
  heading: string;
  background: boolean;
}

const SectionHeading = ({ heading, background }: SectionHeadingProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', mb: '20px' }}>
      <Background theme={theme} background={background}>
        <StyledHeading
          component='h2'
          color={background ? '#fff' : theme.palette.primary.main}
        >
          {heading}
        </StyledHeading>
      </Background>
    </Box>
  );
};

export default SectionHeading;
