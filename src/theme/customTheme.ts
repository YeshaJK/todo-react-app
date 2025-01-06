import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({ 
    palette: {
        mode: 'dark',
        background: {
            paper: '#1e1e1e', // Ensure this color is defined
            default: '#121212',
        },
        primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5',
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
          fontSize: '2.5rem',
          fontWeight: 500,
        },
        body1: {
          fontSize: '1rem',
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
            },
          },
        },
      },
}); 