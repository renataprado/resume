import './App.css';
//import Profile from './components/Profile';
import Why from './components/Material';
import { ThemeProvider, Box, Container, Grid, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Profile from './components/Profile';
import Timeline from './components/Timeline';



function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      }
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <ThemeProvider  theme={theme}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                minWidth: '10vh',
                height: '94vh'
              }}
            >
              <Profile></Profile>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                height: '94vh'
              }} 
            >
              <Timeline></Timeline>
              <Item> Something </Item>
              <Item> Something </Item>
              <Why></Why> 
            </Box>
          </Grid>
        </Grid>
      </Box>
     
      </ThemeProvider>
  );
    </div>
  );
}

export default App;
//background-color: rgb(21, 32, 43); /*! scrollbar-color: rgb(107, 125, 140) rgb(25, 39, 52); */