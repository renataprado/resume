import React from 'react';
import { Box, Link, Typography, LinearProgress } from '@mui/material';
import TimelineItem from './TimelineItem';

function Timeline(props){
  const mobile = props.mobile;
  const items = props.items;
  return (
    <Box
      sx={{
        p: 2,
        minHeight: 540,
        mt: 2
      }}
    >
      {!mobile ? 
        (<Typography variant="h6" sx={{ color: "text.primary", mb: 2 }}>
          {props.title}
        </Typography>) 
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
          <Box sx={{height: '100%', maxHeight: 160}}>
            <TimelineItem key={item.id} value={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Timeline;
