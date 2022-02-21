
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
          <NavItem title={'Educação'} component={<Timeline  items={educationItems} mobile={true}/>}></NavItem>
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
                height: '94vh'
              }} 
            >
              <Timeline items={educationItems}></Timeline>
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
    <Box>
      <ListItemButton sx={!open ? styles.listItem: styles.none} onClick={handleClick}>
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
    </Box>
  )
}

const styles = {
  collapse:{
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px'
  },
  listItem: {
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px'
  },
  none: {
    display: 'none'
  }
}


const educationItems = [
  {
    id: 1, 
    uptitle: 'Técnico',
    title: 'Comunicação Visual', 
    subtitle: 'Etec Rocha Mendes',
    period:  '2009 - 2010',
    obs: ''
  },
  {
    id: 2, 
    uptitle: 'Bacharelado',
    title: 'Ciência e Tecnologia', 
    subtitle: 'UFABC - Universidade Federal do ABC',
    period:  '2014 - 2015',
    obs: ''
  },
  {
    id: 3, 
    uptitle: 'Tecnólogo',
    title: 'Análise e Desevolvimento de Sistemas', 
    subtitle: 'FATEC - Faculdade de Tecnologia de São Paulo',
    period:  '2018 - Atualmente',
    obs: ''
  }
]


export default Main

