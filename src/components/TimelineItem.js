import { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';

function TimelineItem(props){
  const [active, setActive] = useState(false);
  const secs = (props.value.id - 1)*600;

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), secs);
  }, [])

  if(active){
    return (
      <Box sx={{ display: "flex", height: '100%', animation: 'fadein 0.25s'}} >
        <Box sx={styles.paper}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <Typography variant="caption" sx={{ color: "text.secondary", mb: 0 }}>
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
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            {props.value.obs}
          </Typography>
        </Box>
        <Box sx={styles.arrow}>&#11208;</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%"}}
        >
          <Box sx={styles.circle} />
          <Box
            sx={{
              height: "100%",
              bgcolor: "primary.main",
              mt: -2,
              width: 4,
              animation: 'reveal 0.65s linear'}}
          />
        </Box>
      </Box>
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
    width: 300,
    pt: 2,
    pb: 2,
    pr: 3,
    pl: 3,
    mb: 2,
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
  },
  period:{
    borderRadius: 20,
    mr: -2,
    mt: -1,
    pr: 1,
    pl: 1,
    textAlign: 'center',
    bgcolor: 'background.default'
  },
  arrow: {
    ml: -1,
    mr: 1.5,
    fontSize: 24,
    color: 'background.paper',
  },
  circle: {
    position: 'relative',
    top: 10,
    bgcolor: 'primary.main',
    width: 15,
    height: 15,
    borderRadius: 20,
    animation: 'fadein 0.2s'
  }
}

export default TimelineItem;