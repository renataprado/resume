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
        p: 2,
        height: "100%",
      }}
    >
      {!mobile ? 
        (<Typography variant="h5" gutterBottom
          sx={{ color: "text.primary", p: 3 }}>
          {props.title}</Typography>) 
        : (<Box />)
      }
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: '100%'
        }}
      >
        {items.map((item) => (
          <Box sx={{height: '100%', maxHeight: 180}}>
            <TimelineItem key={item.id} value={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Timeline;
