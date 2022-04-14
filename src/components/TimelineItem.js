import { useEffect, useState } from "react";
import {
  Box,
  Link,
  Typography,
} from "@mui/material";

function TimelineItem(props) {
  const [active, setActive] = useState(false);
  const secs = (props.value.id - 1) * 400;
  const hasObs = String(props.value.obs).length > 0;
  setTimeout(() => setActive(true), secs);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (active) {
    return (
      <Box sx={{ display: "flex", height: "100%"}}>
        <Box sx={styles.paper} onClick={() => setExpanded(!expanded)} >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {props.value.uptitle}
            </Typography>
            <Box sx={styles.period}>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {props.value.period}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            {props.value.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            {props.value.subtitle}
          </Typography>
          {  hasObs ? (
              <Box> 
                <Box sx={{float: 'right', mt: -3}}>
                  <Typography variant="h6" sx={{ color: "text.primary" }}>
                  {expanded ? '-' : '+'} 
                  </Typography>
                
              
                </Box>
                <Box className="accordion-content" aria-expanded={!expanded} >
                  <Typography
                        variant="body2"
                        sx={{ color: "text.primary" }}
                      >
                        {props.value.obs}
                      </Typography>
                </Box>
              </Box>)
              : <div/>}
        </Box>
        <Box sx={styles.arrow}>&#11208;</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={styles.circle} />
          <Box sx={styles.line} />
        </Box>
      </Box>
    );
  }
  return <Box sx={{ width: 400 }}></Box>;
}

const styles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    bgcolor: "background.paper",
    width: '80%',
    p:2.5,
    mt: 2.5,
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 3px 0px",
    animation: "fadein 0.3s",
  },
  period: {
    borderRadius: 20,
    mr: -1,
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
    borderRadius: 20,
  },
  line: {
    height: "100%",
    bgcolor: "primary.main",
    mt: -2,
    width: 3,
    animation: "reveal 0.4s linear",
  },
};

export default TimelineItem;
