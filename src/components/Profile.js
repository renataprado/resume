import React, {useState, useEffect} from 'react';
import { Box, Avatar, Typography, Divider, LinearProgress, CircularProgress, Stack} from '@mui/material';
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
        <Typography variant="h5" sx={{color: 'text.primary', fontSize: '1.2rem', mt: 2}}>
          Renata Prado
        </Typography>
        <Typography variant= 'overline' sx={{color: 'text.secondary', fontSize: '0.7rem', mb: 2}}>
          Desenvolvedora de Software
        </Typography>
        <Divider  flexItem/>   
        <Box sx={styles.section}>
          <Typography variant= 'h6'sx={styles.sectionTitle}>
            Idiomas
          </Typography>
          <Stack  direction="row" spacing={2}>
            {languages.map((l, index) => 
              <Language key={index} value={l}></Language>
            )}
          </Stack>
          <Divider sx={{ mt: 3}}  flexItem/>
        </Box>  
        <Box sx={styles.section}>
          <Typography variant= 'h6'sx={styles.sectionTitle}>
            Tecnologias
          </Typography>
          <Stack sx={{width: '90%'}} spacing={1}>
            {skills.map((skill, index) => 
            <Skill key={index} value={skill}></Skill>
            )}
          </Stack>
          <Divider sx={{ mt: 3}}  flexItem/>
        </Box>
      </Box>
    );
}
const Skill = (props) => {
  const [progress, setProgress] = useState(props.value.progress);
  return (
    <Box sx={{ mt: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography
          sx={{color: 'text.primary', fontSize: '0.8rem'}}>
            {props.value.title}
      </Typography>
      <LinearProgress 
        sx={{mt:0.5}}
        variant="determinate" 
        value={progress} />
    </Box>
  )
}

const Language = (props) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= props.value.progress ? props.value.progress : prevProgress+5));
    }, 80);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary" sx={{fontSize: 11 }}>
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <CircularProgressWithLabel value={progress} />
      <Typography sx={{color: 'text.primary', fontSize: '0.7rem', mt: 0.7}}>
            {props.value.title}
      </Typography>
    </Box>
  )
}

const skills = [{title: 'Angular', progress: 70}, {title: 'React', progress: 60}, {title: 'Node', progress: 60}]
const languages = [ {title: 'Inglês', progress: 85}, {title: 'Espanhol', progress: 35}, {title: 'Português', progress: 100}]
const styles = {
  section: { 
     width: '80%',
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     mt: 2
  },
  sectionTitle: { 
    fontSize:'0.9rem',
     width: '100%', 
     color: 'text.primary',
     mt:1,
     mb:1
  }
}
export default Profile;