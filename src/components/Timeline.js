import React from 'react';
import { Box, Link, Typography, LinearProgress } from '@mui/material';
import TimelineItem from './TimelineItem';

function Timeline(props){
  const mobile = props.mobile;
  return(
    <Box
      sx={{
        display: 'flex', 
        flexDirection:'column',  
        alignItems: 'center', 
        height: '90vh', 
        p: 1
      }}
    >
      {!mobile ? 
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{color: 'text.primary', p: 3}}
        > 
          Educação 
        </Typography> : <Box sx={{mb: -1}}/>
      }
      <Box sx={{position: 'relative', display: 'flex', minHeight: 500, height: '90%', justifyContent: 'flex-start'}}>
        <Box sx={
          {position: 'relative', 
          display:'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-evenly', 
          left: 13}
        }>
          {educationItems.map((item) =>
            <TimelineItem key={item.id} value={item}/>
          )}
        </Box>
        <Box className='lineItems' sx={{position:'absolute', top: 0, left: 0, width: 360, bgcolor: 'background.default'}}></Box>
        <Box className='line' sx={{width: 5,  height: '95%', bgcolor: 'background.contrast'}}/>
      </Box>

    </Box>
  )
}
/*
<Box sx={{position:'relative', right:380, width: 510, bgcolor: 'black'}}>
s
</Box>*/

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

export default Timeline;
