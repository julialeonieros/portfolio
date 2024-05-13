import { Container, IconLink } from './styles';

const IconLinks = () => {
  return (
    <Container>
      <IconLink
        title='Länk till LinkedIn'
        href='https://www.linkedin.com/in/julia-ros-95023992/'
        underline='none'
      >
        <i className='fa-brands fa-linkedin-in'></i>
      </IconLink>
      <IconLink
        title='Länk till Github'
        href='https://github.com/julialeonieros'
        underline='none'
      >
        <i className='fa-brands fa-github'></i>
      </IconLink>
      <IconLink
        title='Öppna epost'
        href='mailto:julia.leonie.ros@gmail.com'
        underline='none'
      >
        <i className='fa-regular fa-envelope'></i>
      </IconLink>
    </Container>
  );
};

export default IconLinks;
