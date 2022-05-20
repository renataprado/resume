
import { useState } from 'react';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';
import ContactMe from '../components/ContactMe';

import {
  Box,
  Grid,
  Collapse,
  Typography,
  List,
  ListItemButton
} from '@mui/material';


const workexpItems = [
  {
    id: 1,
    uptitle: 'Desenvolvedora de Software',
    title: 'IBM',
    subtitle: 'Technology Garage ',
    period: 'mar 2021 - dez 2021',
    obs: 'Desenvolvimento de MVPs para grandes clientes de Cloud. Experiência com desenvolvimento web, React, Angular, NodeJS, Docker, CI/CD, Chatbot, Agile, Design Thinking.'
  },
  {
    id: 2,
    uptitle: 'Estágiaria',
    title: 'IBM',
    subtitle: 'Cloud & Cognitive ',
    period: 'set 2019 - fev 2021',
    obs: 'Apoio aos vendedores técnicos da unidade de Hybrid Cloud, acompanhamento de apresentações de produtos e provas de conceito. Desenvolvimento web de soluções internas para a equipe utilizando Angular e NodeJS.'
  },
  {
    id: 3,
    uptitle: 'Estágiaria',
    title: 'OneSoft',
    subtitle: 'Desenvolvimento C# ',
    period: 'fev 2019 - ago 2019',
    obs: 'Desenvolvimento em C# de features diversas, principalmente relacionadas a tela. Elaboração e codificação de unit tests. Configuração de rotinas de testes automatizados no Jenkins.'
  },

];

const educationItems = [
  {
    id: 1,
    uptitle: 'Tecnólogo',
    title: 'Análise e Desenvolvimento de Sistemas',
    subtitle: 'FATEC - Faculdade de Tecnologia de São Paulo',
    period: '2018 - Atualmente',
    obs: ''
  },
  {
    id: 2,
    uptitle: 'Bacharelado',
    title: 'Ciência e Tecnologia',
    subtitle: 'UFABC - Universidade Federal do ABC',
    period: '2014 - 2015',
    obs: ''
  },
  {
    id: 3,
    uptitle: 'Técnico',
    title: 'Comunicação Visual',
    subtitle: 'Etec Rocha Mendes',
    period: '2009 - 2010',
    obs: ''
  }

]

const skills = [ "JavaScript", "Angular", "React", "C#", "Docker", "NoSQL","Git", ];

const languages = [
  { title: "Inglês", progress: 85 },
  { title: "Espanhol", progress: 35 },
  { title: "Português", progress: 100 },
];



function Main(props) {
  const isMobile = props.mobile;
  if (isMobile) {
    return (
      <Box sx={{ pt: 6 }}>
        <List sx={{ width: '100%', bgcolor: 'background.default' }} component="nav">
          <NavItem title={'Perfil'} component={<Profile languages={languages} skills={skills}/>}></NavItem>
          <NavItem title={'Educação'}
            component={<Box sx={{ display: "flex", }}><Timeline items={educationItems} mobile={true} /></Box>}></NavItem>
          <NavItem title={'Experiência Profissional'}
            component={<Box sx={{ display: "flex" }}><Timeline items={workexpItems} mobile={true} /></Box>}></NavItem>
          <NavItem title={'Contato'}
            component={<Box sx={{ display: "flex" }}><ContactMe mobile={true} /></Box>}></NavItem>
        </List>
      </Box>
    )
  }
  return (
      <Grid container>
        <Grid item sm={4} md={3} lg={2}>
          <Box sx={{ 
            bgcolor: "background.paper", 
            height: "100vh", 
            minHeight: 720}}>
            <Profile languages={languages} skills={skills}></Profile>
          </Box>
        </Grid>
        <Grid item sm={8} md={9} lg={10}>
          <Box sx={{ 
              bgcolor: "background.default", 
              height: '100vh', 
              minHeight: 720,overflow: "auto", display: 'flex',  }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={9} lg={5}  >
                <Box sx={styles.gridContainer}>
                  <Timeline title="Experiência Profissional" items={workexpItems} />
                </Box>
              </Grid>
              <Grid item xs={12} md={9} lg={5}>
                <Box sx={styles.gridContainer}>
                  <Timeline title="Educação" items={educationItems}></Timeline>
                </Box>
              </Grid>
              <Grid item xs={12} sx={styles.centerItem}>
                <Box sx={{ width: '90%' }}>
                  <ContactMe />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
  );
}


const styles = {
  collapse: {
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
    display: "flex", width: '90%', mt: 3, p: 2
  },
  centerItem: {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => { setOpen(!open) };
  return (
    <Box>
      <ListItemButton sx={!open ? styles.listItem : styles.none} onClick={handleClick}>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', p: 2 }}>
          {props.title}
        </Typography>
      </ListItemButton>
      <Collapse sx={styles.collapse} in={open} timeout="auto" unmountOnExit>
        {props.component}
      </Collapse>
    </Box>
  )
}



export default Main

