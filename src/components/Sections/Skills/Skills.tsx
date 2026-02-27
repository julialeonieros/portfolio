import { List, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Section from '../Section/Section';
import { StyledListitem } from './styles';

const skillsToolbox = [
  'VSCode',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Figma',
  'Postman',
  'Azure DevOps',
  'Jira',
  'MongoDB',
  'GitHub',
];

const skillsCode = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Redux',
  'Node.js',
  'Material UI',
  'Styled Components',
  'Git',
];

const skillsMore = [
  'Accessibility (CPACC certified)',
  'Typography',
  'Layout',
  'Dynamics 365',
  'Power Automate'
];

const Skills = () => {
  return (
    <Section
      width={'narrow'}
      background={'grey'}
      heading={'skills'}
      headingBackground={true}
    >
      <Grid container spacing={3} mt={0} sx={{ textAlign: 'center' }}>
        <Grid xs={12} sm={4}>
          <Typography variant='h3' mt={1}>
            Toolbox
          </Typography>
          <List>
            {skillsToolbox.map((skill) => {
              return <StyledListitem key={skill}>{skill}</StyledListitem>;
            })}
          </List>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography variant='h3' mt={1}>
            Code
          </Typography>
          <List>
            {skillsCode.map((skill) => {
              return <StyledListitem key={skill}>{skill}</StyledListitem>;
            })}
          </List>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography variant='h3' mt={1}>
            More
          </Typography>
          <List>
            {skillsMore.map((skill) => {
              return <StyledListitem key={skill}>{skill}</StyledListitem>;
            })}
          </List>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Skills;
