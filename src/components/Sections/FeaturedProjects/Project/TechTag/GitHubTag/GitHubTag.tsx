import Link from '@mui/material/Link';
import { Container } from './styles';

interface TagProps {
  href: string;
}

const GitHubTag = ({ href }: TagProps) => {
  return (
    <Link
      title='Link to the projects repository in Github'
      href={href}
      underline='none'
    >
      <Container>
        <i className='fab fa-github'></i>
      </Container>
    </Link>
  );
};

export default GitHubTag;
