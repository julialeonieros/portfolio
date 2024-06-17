import { useTheme } from '@mui/material/styles';
import { StyledLink } from './styles';

interface IconProps {
  color: 'white' | 'green';
}

const IconLinks = ({ color }: IconProps) => {
  const theme = useTheme();
  const linkColor = color === 'white' ? '#fff' : theme.palette.primary.main;

  return (
    <>
      <StyledLink
        title='Länk till LinkedIn'
        href='https://www.linkedin.com/in/julia-ros-95023992/'
        underline='none'
        color={linkColor}
        theme={theme}
      >
        <i className='fa-brands fa-linkedin-in'></i>
      </StyledLink>
      <StyledLink
        title='Länk till Github'
        href='https://github.com/julialeonieros'
        underline='none'
        color={linkColor}
        theme={theme}
      >
        <i className='fa-brands fa-github'></i>
      </StyledLink>
      <StyledLink
        title='Öppna epost'
        href='mailto:julia.leonie.ros@gmail.com'
        underline='none'
        color={linkColor}
        theme={theme}
      >
        <i className='fa-regular fa-envelope'></i>
      </StyledLink>
    </>
  );
};

export default IconLinks;
