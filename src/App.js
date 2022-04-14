import './App.css';
//import { ThemeProvider} from  '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import {  ThemeProvider, Box, IconButton, useMediaQuery} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Main from './screens/Main';

import {darkTheme, lightTheme} from './themes';

function App() {
  const [ theme, setTheme ] = useState(darkTheme);
  const [ width, setWindowWidth ] = useState(0); 

  useEffect(() => { 
    //Call updateDimensions to set the initial width to the current window size
    updateDimensions();
    //Add the event listener when the Component mounts
    window.addEventListener('resize', updateDimensions);
    return () => 
      //Remove the event listener when the Component unmounts
      window.removeEventListener('resize',updateDimensions);    
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  function themeHandler(click){
    click ? setTheme(lightTheme) : setTheme(darkTheme)
  }

  const responsive = {
    mobile: width <= 690
  }

  return (
    <ThemeProvider  theme={theme}>
    <Box sx={{width: '100%', height: '100vh', bgcolor: 'background.default'}}>
      <div  style={{position: 'absolute', right: 10}}>
       <ChangeTheme onClick={themeHandler}></ChangeTheme>
      </div>
      {/* <span>{`width: ${width}`}</span>
      <span>{` ${responsive.mobile}`}</span> */}
      <Main mobile={responsive.mobile}></Main>
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
        {  click ? <Brightness4Icon /> : <Brightness7Icon /> }
      </IconButton>
    </Box>
  )
}

export default App;