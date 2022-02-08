import './App.css';
//import { ThemeProvider} from  '@material-ui/core/styles';
import { useState } from 'react';
import {  ThemeProvider, Box, Grid, IconButton, useMediaQuery} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import {darkTheme, lightTheme} from './themes';

function App() {
  const [ theme, setTheme ] = useState(darkTheme);
  const matches = useMediaQuery('(min-width:700px)');

  function themeHandler(click){
    if(click){
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme)
    }
  }
  function Item(){
    return (
      <Box
        sx={{
          border: '1px solid'
        }}
      />
    )
  }
  

  return (
    <ThemeProvider  theme={theme}>
    <Box sx={{backgroundColor: 'background.default'}}>
      <div  style={{position: 'absolute', right: 10}}>
       <ChangeTheme onClick={themeHandler}></ChangeTheme>
      </div>
      <Box sx={{ flexGrow: 1, p: 2 }}>
      <span>{`(min-width:600px) matches: ${matches}`}</span>
        <Grid container>
          <Grid item sx={12}  sm={4} md={3} lg={2}>
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
          <Grid item sx={12}  sm={8} md={9} lg={10}>
            <Box
              sx={{
                height: '94vh',
                bgcolor: 'background.test'
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

const ChangeTheme = (props) => {
  const [click, setClick] = useState(false);
  function clickHandler() {
    props.onClick(!click)
    setClick(!click)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 1,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={clickHandler} color="inherit">
        {  click ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default App;
//background-color: rgb(21, 32, 43); /*! scrollbar-color: rgb(107, 125, 140) rgb(25, 39, 52); */