import React, {useEffect, useState} from 'react';
import { Box, Link, Typography } from '@mui/material';

function TimelineItem(props){
  const [active, setActive] = useState(false);
  const secs = (props.value.id - 1)*1000;

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), secs);
  }, [])

  if(active){
    return (
      <div style={{ display: "flex", height: '100%'}} >
        <Box sx={styles.paper}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <Typography variant="caption" sx={{ color: "text.secondary", mb: -1 }}>
              {props.value.uptitle}
            </Typography>
            <Box sx={styles.period}>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {props.value.period}
              </Typography>
            </Box>
          </div>
          <Typography variant="body1" gutterBottom sx={{ color: "text.primary" }}>
            {props.value.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            {props.value.subtitle}
          </Typography>
        </Box>
        <Box sx={styles.arrow}>&#11208;</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            mb: 0}}
        >
          <Box sx={styles.circle} />
          <Box
            className="line"
            sx={{
              height: "100%",
              bgcolor: "primary.main",
              mt: -2.5,
              width: 5}}
          />
        </Box>
      </div>
    );
  } 
  return (<div></div>)
}
function link() {
  return(
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
  )
}
const styles = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    bgcolor: 'background.paper',
    minWidth: 300,
    height: '50%',
    p: 3,
    mb: 2,
    animation: 'fadein 0.3s'
  },
  period:{
    borderRadius: 20,
    mt: -1.5,
    mr: -1.5,
    mb: 1,
    pr: 1,
    pl: 1,
    textAlign: 'center',
    bgcolor: 'background.default'
  },
  arrow: {
    ml: -1,
    mr: 1.5,
    fontSize: 26,
    color: 'background.paper'
  },
  circle: {
    position: 'relative',
    top: 8,
    bgcolor: 'primary.main',
    width: 18,
    height: 18,
    borderRadius: 20,
    animation: 'fadein 0.2s'
  }
}

export default TimelineItem;