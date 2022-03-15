import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StartIcon from '@mui/icons-material/Start';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SendIcon from '@mui/icons-material/Send';
import { Box, Paper, Link, Typography, Button, TextField, IconButton, Grid } from "@mui/material"


function ContactMe(props){
    const mobile = props.mobile;
    const [active, setActive] = useState(false);
    const secs = 1800;

    
  useEffect(() => {
    const timer = setTimeout(() => setActive(true), secs);
  }, [])

  if(active){
    return (
      <Box
        sx={{
          width: "86%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: 1
        }}
      >
        <Box
          sx={{
            mt: -1,
            width: '100%',
            height: 10,
            bgcolor: "primary.main",
            animation: "slide-in 1000ms",
          }}
        />
        {!mobile ? (
          <Typography variant="h6" sx={{ color: "text.primary", mb: 2 }}>
            Contato
          </Typography>
        ) : (
          <Box />
        )}
        <Grid container spacing={{sm:1, md:2, lg:6}} alignItems="center">
          <Grid item sm={12} md={12} lg={6}>
            <Box sx={{height: 208}}>
              <Phone/>
            </Box>
          </Grid>
          <Grid item sm={12} md={12} lg={6}>
          <Box >
            <Message />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
  return (<div></div>)
}


const Message = () => {
  return(
    <Box sx={{  width: '100%', maxWidth: 800, gap: 1.5 , display: 'flex', flexDirection:'column' }}>
      <TextField  fullWidth size='small'  label="Nome" />
      <TextField  fullWidth size='small'  label="Email" />
      <Box sx={{display: 'flex'}}>
        <TextField 
          label="Mensagem"
          multiline
          fullWidth 
          rows={3}
        />
        <Button ><SendIcon /></Button>
      </Box>
    </Box>
  )
}
const Phone = () => {
  const styles = {
    container: { 
      height: '50%',
      p: 2, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: 'space-between',
      bgcolor: 'background.default'}
  }
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column',  gap: 1.5}}>
      <Paper variant='outlined' sx={styles.container}>
        <PhoneAndroidIcon sx={{fontSize: 32}}/>
        <Typography fontSize={"1rem"} >
          +55 11 95168-3805
        </Typography>
        <IconButton color='primary'
          onClick={() => {
            window.open("https://wa.me/5511951683805", "_blank");
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Paper>
      <Paper variant='outlined' sx={styles.container}>
        <AlternateEmailIcon sx={{fontSize: 32}}/>
        <Typography fontSize={"1rem"}>
          renata.sprado@outlook.com
        </Typography>
        <Box/>
      </Paper>
    </Box>
  );
};

export default ContactMe;