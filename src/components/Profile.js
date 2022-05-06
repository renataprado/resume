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
import PlaceIcon from '@mui/icons-material/Place';
import avatar from "../assets/avatar1.jpg";

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
        height: "100%",
      }}
    >
      <Card />
      <Stack
          sx={{ width: "90%", pt: 2, pb: 2 }}
          spacing={{ xs: 2,  lg: 3 }}
          divider={<Divider flexItem />}
        >
          <Languagues languages={languages}/>
          <Skills skills={skills}/>
          <Box sx={{ 
            display: "flex", 
            width: '100%',
            justifyContent: 'center',
            alignItems: "center" }}
            >
            <PlaceIcon color="primary" />
            <Typography variant="body" sx={{ fontSize: "0.9rem", color: "text.primary", p: 1 }}>
                São Paulo - Brasil
            </Typography>
          </Box>
        </Stack>
      <Box sx={{ width: "100%"}}>
        <Divider flexItem sx={{mb:1}}/>
        <Stack direction="row" justifyContent={"space-evenly"}>
          <Button aria-label="download pdf" onClick={()=> download('../../assets/', 'Renata Souza Prado - Curriculo 2022.pdf')}>
            <DownloadIcon color="primary" />
          </Button>
          <Button aria-label="github"  onClick={()=> window.open('https://github.com/renataprado/', '_blank').focus()} >
            <GitHubIcon color="primary" />
          </Button>
          <Button aria-label="linkedin"  onClick={()=> window.open('https://www.linkedin.com/in/renata--prado/', '_blank').focus()}>
            <LinkedInIcon color="primary" />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
const Card = () => { 
  return(
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: '100%'}}>
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
    </Box>
  )
}

const Skills = (props) => { 
  return(
    <Box sx={{ width: "100%" }}>
            <Typography variant="h6" sx={styles.sectionTitle}>
              Habilidades
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                justifyContent: "space-evenly",
                p: 1,
              }}
            >
              {props.skills.map((s, i) => (
                <Chip sx={{ mb: "0.5rem" }} label={s} key={i} />
              ))}
            </Box>
          </Box>
  )
}

const Languagues = (props) => { 

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

  return(
    <Box sx={{ width: "100%" }}>
    <Typography variant="h6" sx={styles.sectionTitle}>
      Idiomas
    </Typography>
    <Stack
      direction="row"
      spacing={3}
      alignItems="flex-start"
      justifyContent="space-evenly"
    >
      {props.languages.map((l, index) => (
        <Language key={index} value={l}></Language>
      ))}
    </Stack>
  </Box>
  )
}

const download = (path, filename) => {
  // Create a new link
  const anchor = document.createElement('a');
  anchor.href = path;
  anchor.download = filename;

  // Append to the DOM
  document.body.appendChild(anchor);

  // Trigger `click` event
  anchor.click();

  // Remove element from DOM
  document.body.removeChild(anchor);
}; 



const styles = {
  section: {
    width: "100%",
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
