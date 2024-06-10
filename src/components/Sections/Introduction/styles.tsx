import { styled } from '@mui/material/styles';

export const Line = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: '50px',
  height: '3px',
  backgroundColor: theme.palette.primary.main,
  marginBottom: '4px',
}));

export const Circle = styled('span')(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.primary.main,
  width: '11px',
  height: '11px',
  borderRadius: '50%',
  marginLeft: theme.spacing(-1),
  marginRight: theme.spacing(2),
}));
