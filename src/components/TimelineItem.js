import React from 'react';
import { Box, Link, Typography } from '@mui/material';

function TimelineItem(props){
  return(
    <div className="item" style={{display: 'flex'}}>
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
      <Box sx={styles.circles}>
        <Box sx={styles.arrow}>&#11208;</Box>
        <Box sx={styles.circle}/>
      </Box>
    </div>
  )
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

export default TimelineItem;