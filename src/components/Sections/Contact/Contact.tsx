import { Box } from '@mui/material';
import { StyledHeading } from '../../SectionHeading/styles';
import Section from '../Section/Section';
import { Content } from './styles';

const Contact = () => {
  return (
    <Section width={'narrow'} background={'pink'} headingBackground={false}>
      <StyledHeading variant='h2' color='#fff' textAlign={'center'}>
        Contact
      </StyledHeading>
      <Box mt={3} mb={5}>
        <Content>Julia Ros</Content>
        <Content>+46 70-296 86 05</Content>
        <Content>julia.leonie.ros@gmail.com</Content>
      </Box>
    </Section>
  );
};

export default Contact;
