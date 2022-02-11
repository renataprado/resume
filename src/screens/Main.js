
import React from 'react';
import { useState } from 'react';
import { Box, Grid, Collapse, Typography,
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton,
  ListItemIcon } from '@mui/material';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';



function Main(props){
  const isMobile = props.mobile;

  if(isMobile){
    return(
      <Box sx={{pt: 6}}>
        <List
          sx={{ 
            width: '100%', 
            bgcolor: 'background.default'
          }}
          component="nav"
        >
          <NavItem title={'Perfil'} component={<Profile/>}></NavItem>
          <NavItem title={'Educação'} component={<Timeline mobile={true}/>}></NavItem>
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
                bgcolor: 'background.test',
              }} 
            >
              <Timeline></Timeline>
            </Box>
          </Grid>
        </Grid>
    </Box>
  )
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {setOpen(!open)};
  return(
    <div>
      <ListItemButton sx={!open ? styles.listItem: ''} onClick={handleClick}>
        <Typography 
            variant="h6" 
            gutterBottom 
            sx={{color: 'text.primary', p: 2}}
          > 
          {props.title} 
        </Typography>
      </ListItemButton>
      <Collapse  sx={styles.collapse} in={open} timeout="auto" unmountOnExit>
        {props.component}
      </Collapse>
    </div>
  )
}

const styles = {
  collapse:{
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px'
  },
  listItem: {
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px'
  }
}


export default Main

