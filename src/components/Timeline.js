import React from 'react';
import { Box, Avatar, Paper } from '@mui/material';
import { style } from '@mui/system';

const circles = (num) => {     
  let c=[];
  for (var i = 0; i < num; i++){
    c.push( <div style={styles.circle} key={i}/>)};
  return (c);
} 

const papers = (num) => {     
  let c=[];
  for (var i = 0; i < num; i++){
    c.push( <Paper style={styles.paper} elevation={2}>something</Paper>)};
  return (c);
} 

function Timeline(){


  return(
    <Box
      sx={{
        bgcolor: 'background.paper',
        minWidth: 300,
        p: 2
      }}
    >
      <h2>timeline</h2>
      <div style={{display: 'flex'}}>
        <div style={styles.papers}>
          {papers(3)}
        </div>
        <div style={styles.container}>
          <div style={styles.centerx}/>
          <div style={styles.circles}>
            {circles(7)}
          </div>
        </div>
      </div>
    </Box>
  )

}


const styles = {
  paper: {
    maxWidth: 200,
    height: 100,
    padding: 5,
    margin: 6
  },
  papers: {
    width: 210,
    height: 600,
    display: 'flex',
    flexDirection:  'column',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:  'center'
  },
  centerx: {
    width: 5,
    height: 800,
    backgroundColor: 'black'
  },
  circles: {
    height: 800,
    margin: -9,
    display: 'flex',
    flexDirection:  'column',
    justifyContent: 'space-between'
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 20,
    backgroundColor: 'white'
  }
}
export default Timeline;
