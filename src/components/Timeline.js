import React from 'react';
import { Box, Link, Typography } from '@mui/material';

function Timeline(){
  return(
    <Box
      sx={{
        height: '90vh', 
        width: '100%',
        p: 2  
      }}
    >
      <Typography variant="h5" gutterBottom sx={{color: 'text.primary', p: 3}}>
        Educação
      </Typography>
      <Box sx={{display: 'flex', height: '90%'}}>
        <Box  sx={{position: 'relative', left: 12}}>
          {papers('Técnico em Comunicação Visual', 'Etec Rocha Mendes', '2009 - 2010')}
          {papers('Bacharelado em Ciência e Tecnologia', 'Universidade Federal do ABC', '2015 - 2016')}
        </Box>
        <div style={{ width: 4, height: '95%', backgroundColor: 'black'}}/>
      </Box>
    </Box>
  )
}

const papers = (title, subtitle, p) => {    
  const paper = (
    <div style={{display: 'flex'}}>
      <Box sx={styles.paper}>
        <Box sx={styles.period}>
          <Typography variant="caption" sx={{color: 'text.secondary', mt:2}}> {p}</Typography>
        </Box>
        <Typography variant="body1" gutterBottom sx={{color: 'text.primary'}}>{title}</Typography>
        <Typography variant="body2"  sx={{color: 'text.secondary', marginBottom: 2}}>{subtitle}</Typography>
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
  )
  return (paper);
} 

const styles = {
  paper: {
    backgroundColor: 'background.paper',
    width: 380,
    padding: 2.5,
    marginBottom: 4
  },
  period:{
    float: 'right',
    borderRadius: 20,
    width: 84,
    textAlign: 'center',
    bgcolor: 'background.default'
  },
  circles:{
    width: 62,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginLeft: -1
  },
  arrow: {
    fontSize: 28,
    color: 'background.paper',
  },
  circle: {
    bgcolor: 'black',
    width: 16,
    height: 16,
    borderRadius: 20,
    border: 3,
    borderColor: 'primary.main',
  },
  centerx: {
    width: 4,
    height: '95%',
    backgroundColor: 'black'
  }
}
export default Timeline;
