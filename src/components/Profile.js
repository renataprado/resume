import React, {useState} from 'react';
import { Box, Avatar, Typography, Divider, LinearProgress } from '@mui/material';
import avatar from '../assets/avatar1.jpg';

function Profile() {
    return (
      <Box
        sx={{
          pt: 4,
          display: 'flex', 
          flexDirection:'column',  
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 200
        }}
      >
        <Avatar 
            alt="Renata Prado"
            src={avatar}
            sx={{ width: '100%', height: '100%', maxWidth: 140 }}
        />
        <Typography variant="h5" 
        sx={{color: 'text.primary', fontSize: '1.2rem', mt: 2}}>
          Renata Prado
        </Typography>
        <Typography variant= 'overline' 
        sx={{color: 'text.secondary', fontSize: '0.7rem', mb: 2}}>
          Desenvolvedora de Software
        </Typography>
        <Divider  flexItem/>
        <Box sx={{ width: '80%', mt: 4}}>
          {skills.map((skill, index) => 
           <Skill key={index} value={skill}></Skill>
          )}
        </Box>
      </Box>
    );
}
const Skill = (props) => {
  const [progress, setProgress] = useState(props.value.progress);
  return (
    <Box sx={{ mt: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography
          sx={{color: 'text.primary', fontSize: '0.85rem'}}>
            {props.value.title}
      </Typography>
      <LinearProgress 
        sx={{mt:0.5}}
        variant="determinate" 
        value={progress} />
    </Box>
  )
}

const skills = [{title: 'Angular', progress: 70}, {title: 'React', progress: 60}, {title: 'Node', progress: 60}]

const styles = {
}
export default Profile;