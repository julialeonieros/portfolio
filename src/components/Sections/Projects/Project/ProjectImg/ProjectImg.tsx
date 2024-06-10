import { ImageWrapper, StyledImage } from './styles';

interface ProjectImgProps {
  src: string;
}

const ProjectImg = ({ src }: ProjectImgProps) => {
  return (
    <ImageWrapper>
      <StyledImage alt='' src={src} />
    </ImageWrapper>
  );
};

export default ProjectImg;
