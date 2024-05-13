import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import image from '../../assets/forest.jpg';

export const HeroImg = styled('header')(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${image})`,
  backgroundColor: '#024434',
  height: '600px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  [theme.breakpoints.down('md')]: {
    height: '450px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '520px',
  },
}));

export const IconsContainer = styled(Box)(() => ({
  display: 'inline-block',
  position: 'absolute',
  top: '10%',
  right: '10%',
}));

export const HeadingsContainer = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '10%',
  color: '#fff',
}));

export const SubHeading1 = styled('p')(({ theme }) => ({
  fontSize: '4.8rem',
  fontWeight: 700,
  margin: 0,
  lineHeight: '90px',

  [theme.breakpoints.down('md')]: {
    fontSize: '2.9rem',
    lineHeight: '57px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem !important',
    lineHeight: '49px',
  },
}));

export const SubHeading2 = styled('p')(({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 700,
  marginTop: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const Bold = styled('span')(() => ({
  fontWeight: 700,
}));
