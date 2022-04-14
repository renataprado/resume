import { Box, Typography } from '@mui/material';
import TimelineItem from './TimelineItem';

function Timeline(props){
  const mobile = props.mobile;
  const items = props.items;

  return (
    <Box sx={{ width: '100%'}}>
      {!mobile ? (
        <Typography variant="h6" sx={{ color: "text.primary"}}>
          {props.title}
        </Typography>
      ) : (
        <Box />
      )}
      <Box
        sx={{
          width: "75%",
          height: 3,
          bgcolor: "primary.main",
          animation: "slide-in 475ms ",
        }}
      />
      <Box  sx={mobile ? styles.mobileContainer : styles.container}>
        {items.map((item, index) => (
          <Box sx={{pl: '5%', pr: '5%'}} key={index} >
            <TimelineItem value={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const styles = {
  container: { 
    display: "flex", 
    flexDirection: "column",
    pt:1,
    height: '100%', 
    minHeight: '24rem',
    maxHeight: '60vh' ,
    overflowY: 'auto'
  },
  mobileContainer: { 
    display: "flex", 
    flexDirection: "column",
    pt:1,
    height: '100%', 
    minHeight: '24rem',
  }
}

export default Timeline;