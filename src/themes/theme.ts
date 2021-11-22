import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#4488dd',
    },
    secondary: {
      main: '#f0f0f0',
    },
    text: {
      primary: '#454545',
      secondary: '#747474',
    },
  },
  components: {
    MuiContainer: {
      variants: [
        {
          props: { className: 'page' },
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '1px solid transparent',
          borderRadius: 8,
          backgroundColor: '#f0f0f0',
          label: {
            padding: 4,
            backgroundColor: '#f0f0f0',
            color: '#454545',
          },
          '*': {
            fontFamily: 'Gemunu Libre, sans-serif',
            border: 'none !important',
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f0f0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          padding: 1,
          borderRadius: 8,
          color: '#454545',
          backgroundColor: '#f0f0f0',
          boxShadow: 'inset 0 0 0 4px #ccc',
          transition: 'filter, 200ms',
          fontSize: 32,
          fontFamily: 'Gemunu Libre, sans-serif',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            filter: 'brightness(0.9)',
            transform: 'scale(1.1)',
          },
          '&:active': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
});

export default theme;
