import { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { height } from '@mui/system';

function TimelineItem(props){
  const [active, setActive] = useState(false);
  const secs = props.value.id * 500;

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), secs);
  }, [])

  if(active){
    return (
      <Box sx={{ display: "flex", height: '100%'}} >
        <Box sx={styles.paper}>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <Typography variant="caption" sx={{ color: "text.secondary"}}>
              {props.value.uptitle}
            </Typography>
            <Box sx={styles.period}>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {props.value.period}
              </Typography>
            </Box>
          </Box>
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
          <Box sx={styles.line}/>
        </Box>
      </Box>
    );
  } 
  return (<Box sx={{width: 400}} ></Box>)
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    bgcolor: "background.paper",
    width: 320,
    pt: 2,
    pb: 2,
    pr: 3,
    pl: 3,
    mt: 2.5,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
    animation: 'fadein 0.3s'
  },
  period: {
    borderRadius: 20,
    mr: -2,
    mt: -1.5,
    pr: 1,
    pl: 1,
    textAlign: "center",
    bgcolor: "background.default",
  },
  arrow: {
    ml: -1,
    mr: 1,
    mt: 2,
    fontSize: 24,
    color: "background.paper",
  },
  circle: {
    position: "relative",
    top: 25,
    bgcolor: "primary.main",
    width: 12,
    height: 12,
    borderRadius: 20
  },
  line: {
    height: "100%",
    bgcolor: "primary.main",
    mt: -2,
    width: 3,
    animation: "reveal 0.5s linear",
  }
};

export default TimelineItem;