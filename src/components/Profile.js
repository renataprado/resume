import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  LinearProgress,
  CircularProgress,
  Stack,
  Chip,
  Button
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from "../assets/avatar1.jpg";
import { height } from "@mui/system";

function Profile() {
  const skills = [ "JavaScript", "Angular", "React", "C#", "Docker", "NoSQL","Git", ];

  const languages = [
    { title: "Inglês", progress: 85 },
    { title: "Espanhol", progress: 35 },
    { title: "Português", progress: 100 },
  ];

  return (
    <Box  
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "99%",
        overflow: "auto"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Avatar
          alt="Renata Prado"
          src={avatar}
          sx={{ minWidth: 140, minHeight: 140, mt: 3}}
        />
        <Typography
          variant="h5"
          sx={{ color: "text.primary", fontSize: "1.2rem", mt: 2 }}
        >
          Renata Prado
        </Typography>
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", fontSize: "0.7rem", mb: 2 }}
        >
          Desenvolvedora de Software
        </Typography>
        <Divider flexItem />
        <Stack sx={{width:'90%'}} spacing={{ xs: 2, sm: 3, md: 4 }} divider={<Divider flexItem />}>
          <Box sx={styles.section}>
            <Typography variant="h6" sx={styles.sectionTitle}>
              Idiomas
            </Typography>
            <Stack direction="row" spacing={3}  alignItems="flex-start" justifyContent="space-evenly">
              {languages.map((l, index) => (
                <Language key={index} value={l}></Language>
              ))}
            </Stack>
          </Box>
          <Box sx={styles.section}>
            <Typography variant="h6" sx={styles.sectionTitle}>
              Habilidades
            </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'space-evenly', p:1  }}>
              {skills.map((s, i)=>(<Chip sx={{mb:'0.5rem'}} label={s} key={i}/>))}
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ width: '100%'}}>
        <Divider flexItem />
        <Stack 
          direction="row" 
          justifyContent={'space-evenly'} 
          >
          <Button aria-label="download pdf">
            <DownloadIcon  color="primary"/>
          </Button>
          <Button aria-label="github">
            <GitHubIcon  color="primary"/>
          </Button>
          <Button aria-label="linkedin">
            <LinkedInIcon  color="primary" />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}


const Language = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //const timer = setTimeout(() => setProgress(props.value.progress), 1000);
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.value.progress
          ? props.value.progress
          : prevProgress + 2.5
      );
    }, 80);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <Box sx={{ position: "relative" }}>
          <CircularProgress
            variant="determinate"
            sx={{color: 'primary.shadow'}}
            value={100}
          />
          <CircularProgress
            sx={{
              position: "absolute",
              left: 0,
            }}
            variant="determinate"
            {...props}
          />
        </Box>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 2,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{ fontSize: 11 }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CircularProgressWithLabel value={progress} />
      <Typography sx={{ color: "text.primary", fontSize: "0.7rem", mt: 0.7 }}>
        {props.value.title}
      </Typography>
    </Box>
  );
};

const styles = {
  section: {
    width: "100%",
    mt: 2,
  },
  sectionTitle: {
    fontSize: "0.9rem",
    width: "100%",
    color: "text.primary",
    mb: 2,
  },
};

const LinearSkill = (props) => {
  const skills = [
    { title: "Angular", progress: 70 },
    { title: "React", progress: 60 },
    { title: "Node", progress: 60 },
  ];
  {/* <Stack sx={{ width: "90%" }} spacing={1}>
{skills.map((skill, index) => (
  <Skill key={index} value={skill}></Skill>
))}
</Stack> */}
  const [progress, setProgress] = useState(props.value.progress);
  return (
    <Box
      sx={{ mt: 1, width: "100%", display: "flex", flexDirection: "column" }}
    >
      <Typography sx={{ color: "text.primary", fontSize: "0.8rem" }}>
        {props.value.title}
      </Typography>
      <LinearProgress sx={{ mt: 0.5 }} variant="determinate" value={progress} />
    </Box>
  );
};

export default Profile;
