
import { createTheme } from '@mui/material/styles';
import { green, purple, blue} from '@mui/material/colors';
export const darkTheme = createTheme({
  color: blue,
    typography: {
        fontFamily: [
          'Rubik',
          'sans-serif',
        ].join(','),
    },
    palette: {
      mode: 'dark',
      primary: {
        main: blue[600],
        shadow: 'rgba(255, 255, 255, 0.2)'
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: '#0a1929',
        paper: '#001e3c',
        contrast: '#06101a',
      }
    },
    //'#040d17'
  });
  
export const lightTheme = createTheme({
    color: purple,
    typography: {
      fontFamily: [
        'Rubik',
        'sans-serif',
      ].join(','),
    },
    palette: {
      mode: 'light',
      primary: {
        main: purple[600],
        shadow: 'rgba(0, 0, 0, 0.2)'
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: purple[50],
        paper: '#e6d3e8',
        contrast: purple[100]
      }
    },
  });
