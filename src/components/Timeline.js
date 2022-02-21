import React from 'react';
import { Box, Link, Typography, LinearProgress } from '@mui/material';
import TimelineItem from './TimelineItem';

function Timeline(props){
  const mobile = props.mobile;
  const items = props.items;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
      }}
    >
      {!mobile ? (
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "text.primary", p: 3 }}
        >
          {" "}
          Educação{" "}
        </Typography>
      ) : (
        <Box sx={{ mb: -1 }} />
      )}
      <Box sx={{ display: "flex"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {items.map((item) => (
            <TimelineItem key={item.id} value={item} />
          ))}
        </Box>
      {/* <Box 
          sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            border: 1,
            borderColor: 'red'
          }}
        >
        {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                height: '100%',
                mb: -2
              }}
            >
              <Box sx={styles.circle} />
              <Box
                className='line'
                sx={{
                  position: 'relative',
                  top: -10,
                  width: 6,
                  height: "100%",
                  bgcolor: "primary.main",
                }}
              />
            </Box>
              ))}
              </Box>*/}
      </Box>
    </Box>
  );
}



const styles = {
  circle: {
    position: 'relative',
    top: 16,
    bgcolor: 'primary.main',
    width: 18,
    height: 18,
    borderRadius: 20,
  }
}

/*       
<Box className='lineItems' 
sx={
  {position:'absolute', 
  top: 0, 
  left: 0, 
  width: 360, 
  bgcolor: 'background.default'}}/>
  */

export default Timeline;
