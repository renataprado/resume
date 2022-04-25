
import { useState } from 'react';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';
import ContactMe from '../components/ContactMe';

import { Box, 
  Grid, 
  Collapse, 
  Typography,
  List, 
  ListItemButton} from '@mui/material';


function Main(props){
  const isMobile = props.mobile;
  if(isMobile){
    return(
      <Box sx={{pt: 6}}>
        <List sx={{ width: '100%', bgcolor: 'background.default' }} component="nav">
          <NavItem title={'Perfil'} component={<Profile/>}></NavItem>
          <NavItem title={'Educação'} 
            component={<Box sx={{ display: "flex",}}><Timeline  items={educationItems} mobile={true}/></Box>}></NavItem>
          <NavItem title={'Experiência Profissional'} 
            component={<Box sx={{ display: "flex"}}><Timeline items={workexpItems} mobile={true}/></Box>}></NavItem>
          <NavItem title={'Contato'} 
            component={<Box sx={{ display: "flex"}}><ContactMe mobile={true}/></Box>}></NavItem>
        </List>
      </Box>
    )
  }
  return (
    <Box sx={{ height: '100vh'}}>
      <Grid container spacing={0}>
        <Grid item sm={4} md={3} lg={2}>
          <Box sx={{ bgcolor: "background.paper", height: "100vh", display: 'flex', overflow: "auto" }}>
            <Profile></Profile>
          </Box>
        </Grid>
        <Grid item sm={8} md={9} lg={10}>
          <Box sx={{overflow: "auto", display: 'flex', height: '100vh'}}>
            <Grid container columnSpacing={{md:3, lg: 1}}  rowSpacing={{ sm:3, md: 2, lg: 2}} sx={{p: 2}}>
            <Grid item xs={0} md={2} lg={1} ></Grid>
              <Grid item xs={12} md={9} lg={5}sx={styles.centerItem}>
                <Box sx={styles.gridContainer}>
                  <Timeline title="Experiência Profissional" items={workexpItems} />
                </Box>
              </Grid>
              <Grid item xs={0} md={2} lg={1}></Grid>
              <Grid item xs={12} md={9} lg={5} sx={styles.centerItem}>
                <Box sx={styles.gridContainer}>
                  <Timeline title="Educação" items={educationItems}></Timeline>
                </Box>
              </Grid>
              <Grid item  xs={12}
                sx={styles.centerItem}>
                <Box sx={{width: '90%'}}>
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
  },
  gridContainer: { 
    display: "flex", width: '90%', mt:1, p:2
  },
  centerItem: {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
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


const workexpItems = [
  {
    id: 1, 
    uptitle: 'Desenvolvedora de Software',
    title: 'IBM', 
    subtitle: 'Technology Garage ',
    period:  'mar 2021 - dez 2021',
    obs: 'Desenvolvimento de MVPs para grande clientes de Cloud, como Oi, banco Next, entre outros. Experiência com React, Angular, NodeJS, Docker, CI/CD, Chatbot, Agile, Design Thinking.'
  },
  {
    id: 2, 
    uptitle: 'Estágiaria',
    title: 'IBM', 
    subtitle: 'Cloud & Cognitive ',
    period:  'set 2019 - fev 2021',
    obs: 'Apoio aos vendedores técnicos da unidade de Hybrid Cloud, acompanhamento de apresentações de produtos e provas de conceito. Desenvolvimento web de soluções internaspara a equipe utilizando Angular e NodeJS.'
  },
  {
    id: 3, 
    uptitle: 'Estágiaria',
    title: 'OneSoft', 
    subtitle: 'Desenvolvimento em C# ',
    period:  'fev 2019 - ago 2019',
    obs: 'Desenvolvimento em C# de features diversas, principalmente relacionadas a tela. Elaboração e codificação de unit tests. Configuração de rotinas de testesautomatizados no Jenkins.'
  },

];

const educationItems = [
  {
    id: 1, 
    uptitle: 'Tecnólogo',
    title: 'Análise e Desenvolvimento de Sistemas', 
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

