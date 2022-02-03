import './App.css';
import { ThemeProvider, Box, Grid} from '@mui/material';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import {darkTheme, lightTheme} from './themes';


function App() {

  return (
    <ThemeProvider  theme={darkTheme}>
    <Box sx={{backgroundColor: 'background.default'}}>
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
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
          <Grid item xs={10}>
            <Box
              sx={{
                height: '94vh'
              }} 
            >
              <Timeline></Timeline>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default App;
//background-color: rgb(21, 32, 43); /*! scrollbar-color: rgb(107, 125, 140) rgb(25, 39, 52); */