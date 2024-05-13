import { Typography } from '@mui/material';
import IconLinks from '../IconLinks';
import {
  Bold,
  HeadingsContainer,
  HeroImg,
  IconsContainer,
  SubHeading1,
  SubHeading2,
} from './styles';

const Header = () => {
  return (
    <HeroImg>
      <HeadingsContainer>
        <Typography variant='h1'>
          PORTFOLIO: <Bold>JULIA ROS</Bold>
        </Typography>
        <SubHeading1> frontend developer</SubHeading1>
        <SubHeading2>+ accessibility</SubHeading2>
      </HeadingsContainer>
      <IconsContainer>
        <IconLinks />
      </IconsContainer>
    </HeroImg>
  );
};

export default Header;
