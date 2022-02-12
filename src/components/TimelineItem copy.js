import React, { useState } from 'react';
import { Box, Link, Typography, LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import { width } from '@mui/system';

function TimelineItem(props){
  const [ show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  const time = props.value.id > 1 ? props.value.id * 1000 : 0
  const startProgress = () => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      startProgress(); 
     }, time);
  }, [show]);

  if (!show) return null

  return(
    <div style={{display: 'flex'}}>
      <Box sx={styles.paper}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="caption"  sx={{color: 'text.secondary', mb: -0.5}}>{props.value.uptitle}</Typography>
          <Box sx={styles.period}>
            <Typography variant="caption" sx={{color: 'text.secondary'}}> {props.value.period}</Typography>
          </Box>
        </div>
        <Typography variant="body1" gutterBottom sx={{color: 'text.primary'}}>{props.value.title}</Typography>
        <Typography variant="body2"  sx={{color: 'text.secondary', mb: 1}}>{props.value.subtitle}</Typography>
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
      <Box sx={{
        ml: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        // animation: 'fadeInDownBig',
        // animationDuration: '1s'
      }}>
        <Box sx={styles.circle}/>
        <Box sx={{ 
          mt: 8,
          width: 140, 
          bgcolor: 'pink', 
          height: 4,  
          transform: 'rotate(90deg)'
        }}>

          <LinearProgress className='progress'
           variant="determinate" value={progress} />
      </Box>
      </Box>
      {/* <Box sx={{
        ml: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        // animation: 'fadeInDownBig',
        // animationDuration: '1s'
      }}>
        <Box sx={styles.circle}/>
        <Box sx={{width: 4, height: '100%', bgcolor: 'background.contrast'}}/>
      </Box> */}

      {/* <Box sx={styles.circles}>
        <Box sx={styles.arrow}>&#11208;</Box>
        <Box sx={styles.circle}/>
      </Box> */}
    </div>
  )
}

const LinearProgressTime = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ 
      mt: 10,
      width: 200, 
      bgcolor: 'pink', 
      height: 4,  
      transform: 'rotate(90deg)'
    }}>
      <LinearProgress  variant="determinate" value={progress} />
  </Box>
  );
}


const Line = (props) => {
  const [progress, setProgress] = useState(60);
  return (
      <LinearProgress 
        sx={{mt:0.5}}
        variant="determinate" 
        value={progress} />
  )
}
const styles = {
  paper: {
    bgcolor: 'background.paper',
    minWidth: 300,
    p: 2.5,
    mb: 4,
    // animation: 'fadeIn',
    // animationDuration: '2s'
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
    borderRadius: 50,
    border: 3,
    borderColor: 'primary.main',
  }
}

export default TimelineItem;