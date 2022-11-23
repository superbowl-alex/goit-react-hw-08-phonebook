import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(224, 255, 255)',
      dark: 'rgb(16, 16, 144)',
      light: 'rgb(240, 255, 255)',
      contrastText: 'rgb(16, 16, 144)',
    },
    secondary: {
      main: 'rgb(255, 240, 245)',
      dark: 'rgb(205, 92, 92)',
      contrastText: 'rgb(40, 70, 219)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Comic Sans MS',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
