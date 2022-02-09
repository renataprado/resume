
import React from 'react';
import { useState } from 'react';
import { Box, Grid, Collapse,
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton,
  ListItemIcon } from '@mui/material';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';



function Main(props){
  const isMobile = props.mobile;
  const [openEduc, setOpenEduc] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickEduc = () => {
    setOpenEduc(!openEduc);
  };

  if(isMobile){
    return(
      <Box sx={{pt: 4}}>
        <List
          sx={{ 
            width: '100%', 
            bgcolor: 'background.paper' 
          }}
          component="nav"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Profile" />  
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Profile></Profile>
          </Collapse>
          <ListItemButton onClick={handleClickEduc}>
            <ListItemText primary="Educação" />  
          </ListItemButton>
          <Collapse in={openEduc} timeout="auto" unmountOnExit>
            <Timeline mobile={true}></Timeline>
          </Collapse>
        </List>

      </Box>
    )
  }
  return( 
    <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container>
          <Grid item sm={4} md={3} lg={2}>
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
          <Grid item sm={8} md={9} lg={10}>
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

  )
}

export default Main

