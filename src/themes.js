
import { createTheme } from '@mui/material/styles';
import { green, purple, blue, grey, pink, indigo} from '@mui/material/colors';

export const darkTheme = createTheme({
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
        contrast: '#06101a'
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
        default: '#fef0ff',
        paper: pink[50],
        contrast: pink[100]
      }
    },
  });

  // export const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //     primary: {
  //       main: purple[400],
  //     },
  //     secondary: {
  //       main: green[500],
  //     },
  //     background: {
  //       default: '#fef0ff',
  //       paper: pink[50]
  //     },
  //     line:  pink[100]
  //   },
  // });
