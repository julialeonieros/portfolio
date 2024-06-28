import IconLinks from '../../IconLinks/IconLinks';
import Section from '../Section/Section';
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
