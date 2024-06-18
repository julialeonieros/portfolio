import { useTheme } from '@mui/material/styles';
import { Background, Container, StyledHeading } from './styles';

interface SectionHeadingProps {
  heading: string;
  background: boolean;
}

const SectionHeading = ({ heading, background }: SectionHeadingProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Background theme={theme} background={background}>
        <StyledHeading
          component='h2'
          color={background ? '#fff' : theme.palette.primary.main}
        >
          {heading}
        </StyledHeading>
      </Background>
    </Container>
  );
};

export default SectionHeading;
