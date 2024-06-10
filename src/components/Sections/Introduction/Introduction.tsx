import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NarrowContentContainer, Section } from '../styles';
import { Circle, Line } from './styles';

const Introduction = () => {
  const theme = useTheme();
  return (
    <Section theme={theme} background={'grey'}>
      <NarrowContentContainer>
        <Typography>
          <Line />
          <Circle />
          Hello! I'm a junior frontend developer who's eager to put all my new
          skills into practice, as well as continue learning new things. I have
          a degree in environmental science and I would love to be able to
          incorporate sustainability into my new role. I also have an eye for
          design and a special interest in typography. In recent years I have
          been working with customer service and system administration within
          the municipality, which has made me customer oriented, structured and
          flexible.
        </Typography>
      </NarrowContentContainer>
    </Section>
  );
};

export default Introduction;
