import { ImgWrapper, StyledImg } from './styles';

interface ProjectImgProps {
  src: string;
}

const ProjectImg = ({ src }: ProjectImgProps) => {
  return (
    <ImgWrapper>
      <StyledImg alt='' src={src} />
    </ImgWrapper>
  );
};

export default ProjectImg;
