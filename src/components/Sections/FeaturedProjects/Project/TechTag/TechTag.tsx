import { Container } from './styles';

interface TagProps {
  text: string;
}

const TechTag = ({ text }: TagProps) => {
  return <Container>{text}</Container>;
};

export default TechTag;
