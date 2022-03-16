
import { useState } from 'react';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';
import ContactMe from '../components/ContactMe';

import { Box, 
  Grid, 
  Collapse, 
  Typography,
  List, 
  ListItemButton,
  ListItemIcon,
  Paper, 
  Link} from '@mui/material';


function Main(props){
  const isMobile = props.mobile;
  if(isMobile){
    return(
      <Box sx={{pt: 6}}>
        <List sx={{ width: '100%', bgcolor: 'background.default' }} component="nav">
          <NavItem title={'Perfil'} component={<Profile/>}></NavItem>
          <NavItem title={'Educação'} 
            component={<Timeline  items={educationItems} mobile={true}/>}></NavItem>
          <NavItem title={'Experiência Profissional'} 
            component={<Timeline items={workexpItems} mobile={true}/>}></NavItem>
          <NavItem title={'Contato'} 
            component={<ContactMe mobile={true}/>}></NavItem>
        </List>
      </Box>
    )
  }
  return (
    <Box sx={{ p: 1, height: '98vh'}}>
      <Grid container spacing={0}>
        <Grid item sm={4} md={3} lg={2}>
          <Box
            sx={{ bgcolor: "background.paper", minWidth: 220, height: "98vh" }}
          >
            <Profile></Profile>
          </Box>
        </Grid>
        <Grid item sm={8} md={9} lg={10}>
          <Box sx={{overflow: "auto", display: 'flex',  height: '98vh', }}>
            <Grid container alignItems="center" rowSpacing={3}>
              <Grid item  sm={12} md={12} lg={6}>
                <Box sx={{ display: "flex", justifyContent:"center"}}>
                  <Timeline title="Educação" items={educationItems}></Timeline>
                </Box>
              </Grid>
              <Grid item sm={12} md={12} lg={6}>
                <Box  sx={{ display: "flex", justifyContent:"center"}}>
                  <Timeline
                    title="Experiência Profissional"
                    items={workexpItems}
                  ></Timeline>
                </Box>
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Box sx={{ display: "flex", justifyContent:"center"}}>
                  <ContactMe />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {setOpen(!open)};
  return(
    <Box>
      <ListItemButton sx={!open ? styles.listItem: styles.none} onClick={handleClick}>
        <Typography variant="h6" gutterBottom sx={{color: 'text.primary', p: 2}}> 
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
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px',
    pb: 2
  },
  listItem: {
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 2px 3px'
  },
  none: {
    boxShadow: '0'
  }
}

const workexpItems = [
  {
    id: 1, 
    uptitle: 'Desenvolvedora de Software',
    title: 'IBM', 
    subtitle: 'Technology Garage ',
    period:  'mar 2021 - dez 2021',
    obs: ''
  },
  {
    id: 2, 
    uptitle: 'Estágiaria',
    title: 'IBM', 
    subtitle: 'Cloud & Cognitive ',
    period:  'set 2019 - fev 2021',
    obs: ''
  },
  {
    id: 3, 
    uptitle: 'Estágiaria',
    title: 'OneSoft', 
    subtitle: 'Desenvolvimento em C# ',
    period:  'fev 2019 - ago 2019',
    obs: ''
  },

];

const educationItems = [
  {
    id: 1, 
    uptitle: 'Tecnólogo',
    title: 'Análise e Desevolvimento de Sistemas', 
    subtitle: 'FATEC - Faculdade de Tecnologia de São Paulo',
    period:  '2018 - Atualmente',
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
    uptitle: 'Técnico',
    title: 'Comunicação Visual', 
    subtitle: 'Etec Rocha Mendes',
    period:  '2009 - 2010',
    obs: ''
  }

]


export default Main

