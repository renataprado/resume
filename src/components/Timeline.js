import React from 'react';
import { Box, Avatar, Paper } from '@mui/material';
import { style } from '@mui/system';

function Timeline(){
  return(
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        minWidth: 300,
      }}
    >
      <h2>timeline</h2>
      <div style={styles.container}>
        <div style={styles.centerx}>
        </div>
        <div style={styles.circles}>
          <div style={styles.circle}/>
          <div style={styles.circle}/>
          <div style={styles.circle}/>
          <div style={styles.circle}/>
        </div>
      </div>
    </Box>
  )

}


const styles = {
  circles: {
    height: 800,
    margin: '-11px',
    display: 'flex',
    flexDirection:  'column',
    justifyContent: 'space-evenly'
  },
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent:  'center'
  },
  centerx: {
    width: 6,
    height: 800,
    backgroundColor: 'black'
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 20,
    backgroundColor: 'white'
  }
}
export default Timeline;
