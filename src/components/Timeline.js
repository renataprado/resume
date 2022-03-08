import { Box, Link, Typography, LinearProgress } from '@mui/material';
import TimelineItem from './TimelineItem';

function Timeline(props){
  const mobile = props.mobile;
  const items = props.items;
  
  return (
    <Box sx={{ p: 2, height: '60vh', mt: 2, border: 1 }} >
      {!mobile ? 
        (<Typography variant="h6" sx={{ color: "text.primary", mb: 2 }}>
          {props.title}
        </Typography>) : 
        (<Box />)
      }
      <Box sx={{ display: "flex", flexDirection: "column", height: '100%'}}>
        {items.map((item, index) => ( 
          <Box key={index} sx={{}}>
            <TimelineItem  value={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Timeline;