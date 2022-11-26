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
    accent: {
      main: 'rgb(16, 16, 144)',
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(240, 255, 255)',
          fontSize: 18,
          fontWeight: 500,
          transition: 'transform 250ms ease-out',
          '&:hover': {
            background: 'primary.dark',
            color: '#fff',
            transform: 'scale(1.1)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: 'rgb(16, 16, 144)',
          '&:hover, &:focus': {
            color: 'rgb(16, 16, 144)',
          },
        },
        input: {
          color: 'rgb(16, 16, 144)',
          '&:hover, &:focus': {
            color: 'rgb(16, 16, 144)',
          },
        },
      },
    },
  },
});
