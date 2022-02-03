
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: '#070708'
      },
      teste: {
        red: 'red'
      }
    },
  });
  
export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: '#ebebeb'
      },
    },
  });

