import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import TimelineItem from './TimelineItem';

function Timeline(props){
  const mobile = props.mobile;
  return(
    <Box
      sx={{
        bgcolor: 'background.default',
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
        </Typography> : <Box sx={{mb: -2}}/>
      }

      <Box sx={{display: 'flex', height: '90%', justifyContent: 'flex-start' }}>
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
        <Box sx={{width: 5, height: '95%', bgcolor: 'background.contrast'}}/>
      </Box>
    </Box>
  )
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

export default Timeline;
