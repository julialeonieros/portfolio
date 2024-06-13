import SectionHeading from '@components/SectionHeading/SectionHeading';
import { useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import { ContentContainer, StyledSection } from './styles';

interface SectionProps {
  width: 'wide' | 'narrow';
  background: 'grey' | 'white' | 'pink';
  heading?: string;
  headingBackground: boolean;
  children: ReactNode;
  sx?: object;
}

export const Section = ({
  width,
  background,
  heading,
  headingBackground,
  children,
  sx,
}: SectionProps) => {
  const theme = useTheme();
  return (
    <StyledSection theme={theme} background={background}>
      <ContentContainer width={width}>
        {heading && (
          <SectionHeading heading={heading} background={headingBackground} />
        )}
        {children}
      </ContentContainer>
    </StyledSection>
  );
};

export default Section;
