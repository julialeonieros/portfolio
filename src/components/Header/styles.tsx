import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import backgroundImg from '../../assets/forest.jpg';

export const HeroImg = styled('header')(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${backgroundImg})`,
  backgroundColor: '#024434',
  height: '600px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '40px',

  [theme.breakpoints.down('md')]: {
    height: '450px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '520px',
  },
}));

export const HeaderContentContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  top: '60px',
  right: 0,
  bottom: 0,
  left: 0,
  width: '1100px',

  [theme.breakpoints.down('lg')]: {
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '88%',
  },
}));

export const IconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1.5),

  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'transparent',
  },
}));

export const HeadingsContainer = styled(Box)(() => ({
  position: 'absolute',
  top: 90,
  color: '#fff',
  width: '80%',
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

export const ProfileImg = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  bottom: -30,
  width: '280px',
  height: '280px',
  border: 'solid #fff 3px',
  borderRadius: '50%',
  backgroundColor: '#fff',

  [theme.breakpoints.down('md')]: {
    width: '200px',
    height: '200px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '180px',
    height: '180px',
  },
}));
