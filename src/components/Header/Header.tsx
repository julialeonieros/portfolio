import { Typography } from '@mui/material';
import profilePic from '../../assets/profile_pic.jpg';
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
        <HeadingsContainer>
          <Typography variant='h1' fontWeight={500}>
            PORTFOLIO: <Bold>JULIA ROS</Bold>
          </Typography>
          <SubHeading1> frontend developer</SubHeading1>
          <SubHeading2>+ accessibility</SubHeading2>
        </HeadingsContainer>
        <IconsContainer>
          <IconLinks color={'white'} />
        </IconsContainer>
        <ProfileImg src={profilePic} lang='en' alt='Profile image of Julia' />
      </HeaderContentContainer>
    </HeroImg>
  );
};

export default Header;
