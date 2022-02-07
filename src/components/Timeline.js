import React from 'react';
import { Box, Link, Typography } from '@mui/material';

function Timeline(){
  return(
    <Box
      sx={{
        height: '90vh', 
        p: 2,
        border: 1
      }}
    >
      <Typography variant="h5" gutterBottom sx={{color: 'text.primary', p: 3}}>
        Educação
      </Typography>
      <Box sx={{display: 'flex', height: '90%', justifyContent: 'flex-start', border: 1}}>
        <Box  sx={
          {position: 'relative', 
          display:'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-evenly', 
          left: 13, 
          border: 1}
          }>
          {educationItems.map((item) =>
            <Item key={item.id} value={item}/>
          )}
        </Box>
        <Box sx={{width: 5, height: '95%', bgcolor: 'background.contrast'}}/>
      </Box>
    </Box>
  )
}

const Item = (props) => {    
  return (
    <div style={{display: 'flex'}}>
      <Box sx={styles.paper}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="caption"  sx={{color: 'text.secondary', mb: -0.5}}>{props.value.type}</Typography>
          <Box sx={styles.period}>
            <Typography variant="caption" sx={{color: 'text.secondary'}}> {props.value.period}</Typography>
          </Box>
        </div>
        <Typography variant="body1" gutterBottom sx={{color: 'text.primary'}}>{props.value.name}</Typography>
        <Typography variant="body2"  sx={{color: 'text.secondary', mb: 1}}>{props.value.institution}</Typography>
        <Link
          component="button"
          variant="caption"
          underline="hover"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Disciplinas curriculares
        </Link>
      </Box>
      <Box sx={styles.circles}>
        <Box sx={styles.arrow}>&#11208;</Box>
        <Box sx={styles.circle}/>
      </Box>
    </div>
  );
} 

const styles = {
  paper: {
    bgcolor: 'background.paper',
    minWidth: 300,
    p: 2.5,
    mb: 4
  },
  period:{
    borderRadius: 20,
    mt: -1.5,
    mr: -1.5,
    pr: 1,
    pl: 1,
    textAlign: 'center',
    bgcolor: 'background.default'
  },
  circles:{
    width: 54,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    ml: -1
  },
  arrow: {
    fontSize: 26,
    color: 'background.paper',
  },
  circle: {
    bgcolor: 'background.contrast',
    width: 16,
    height: 16,
    borderRadius: 20,
    border: 3,
    borderColor: 'primary.main',
  }
}

const educationItems = [
  {
    id: 1, 
    type: 'Técnico',
    name: 'Comunicação Visual', 
    institution: 'Etec Rocha Mendes',
    period:  '2009 - 2010',
    obs: ''
  },
  {
    id: 2, 
    type: 'Bacharelado',
    name: 'Ciência e Tecnologia', 
    institution: 'UFABC - Universidade Federal do ABC',
    period:  '2014 - 2015',
    obs: ''
  },
  {
    id: 3, 
    type: 'Tecnólogo',
    name: 'Análise e Desevolvimento de Sistemas', 
    institution: 'FATEC - Faculdade de Tecnologia de São Paulo',
    period:  '2018 - Atualmente',
    obs: ''
  }
]

export default Timeline;
