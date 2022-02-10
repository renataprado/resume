
import { createTheme } from '@mui/material/styles';
import { green, purple, blue, grey, pink, indigo} from '@mui/material/colors';

export const darkTheme = createTheme({
    // typography: {
    //     fontFamily: [
    //       'Mukta',
    //       'sans-serif',
    //     ].join(','),
    // },
    palette: {
      mode: 'dark',
      primary: {
        main: blue[600],
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
    palette: {
      mode: 'light',
      primary: {
        main: purple[400],
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: grey[50],
        paper: purple[50],
        contrast: purple[100]
      }
    },
  });
