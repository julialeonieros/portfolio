import { Typography } from '@mui/material';
import profilePic from '../../assets/coffee.jpg';
import IconLinks from '../IconLinks/IconLinks';
import {
  Bold,
  HeaderContentContainer,
  HeadingsContainer,
  HeroImg,
  IconsContainer,
  ProfileImg,
  SubHeading1,
  SubHeading2,
} from './styles';

const Header = () => {
  return (
    <HeroImg>
      <HeaderContentContainer>
        <IconsContainer>
          <IconLinks color={'white'} />
        </IconsContainer>
        <HeadingsContainer>
          <Typography variant='h1'>
            PORTFOLIO: <Bold>JULIA ROS</Bold>
          </Typography>
          <SubHeading1> frontend developer</SubHeading1>
          <SubHeading2>+ accessibility</SubHeading2>
        </HeadingsContainer>
        <ProfileImg src={profilePic} />
      </HeaderContentContainer>
    </HeroImg>
  );
};

export default Header;
