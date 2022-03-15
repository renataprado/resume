
import { createTheme } from '@mui/material/styles';
import { green, purple, blue, grey, pink, indigo} from '@mui/material/colors';
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
        test: 'rgba(0, 30, 60, 0.2)'
      }
    },
    //'#040d17'
  });
  
export const lightTheme = createTheme({
    color: purple,
    palette: {
      mode: 'light',
      primary: {
        main: purple[600],
        shadow: 'rgba(0, 0, 0, 0.1)'
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
