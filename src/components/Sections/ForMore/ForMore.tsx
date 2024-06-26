import IconLinks from '@components/IconLinks/IconLinks';
import Section from '@components/Sections/Section/Section';
import { Container } from './styles';

const ForMore = () => {
  return (
    <Section
      width={'narrow'}
      background={'white'}
      heading={'for more'}
      headingBackground={true}
    >
      <Container>
        <IconLinks color={'green'} />
      </Container>
    </Section>
  );
};

export default ForMore;
