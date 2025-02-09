
'use client';
import { createTheme } from '@mui/material/styles';
import Radius from '../styles/Radius';
import Space from '../styles/Space';

const radius = Radius();
const space = Space();

export const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  radius: radius.radius,
  space: space.space,
});