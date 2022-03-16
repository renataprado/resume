import { Box, Link, Typography, LinearProgress } from '@mui/material';
import TimelineItem from './TimelineItem';

function Timeline(props){
  const mobile = props.mobile;
  const items = props.items;
  
  return (
    <Box sx={{minHeight: '60vh'}}>
      {!mobile ? (
        <Typography variant="h6" sx={{ color: "text.primary"}}>
          {props.title}
        </Typography>
      ) : (
        <Box />
      )}
      <Box
        sx={{
          width: "99%",
          height: 3,
          bgcolor: "primary.main",
          animation: "slide-in 475ms ",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", height: "90%", mt: 0.3 }}>
        {items.map((item, index) => (
          <Box key={index} sx={{}}>
            <TimelineItem value={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Timeline;