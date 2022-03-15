import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StartIcon from '@mui/icons-material/Start';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SendIcon from '@mui/icons-material/Send';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Box, Paper, Link, Typography, Button, TextField, IconButton, Grid, Modal } from "@mui/material"
import { bgcolor } from '@mui/system';


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
          flexDirection: "column"
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
          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, mt: 5}}>
            Contato
          </Typography>
        ) : (
          <Box />
        )}
        <Grid container spacing={{sm:1, md:2, lg:6}} alignItems="center">
          <Grid item sm={12} md={12} lg={12}>
            <Box sx={{height: 208}}>
              <Phone/>
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
      height: '8vh',
      width: '50%',
      minWidth: 380,
      maxWidth: 450,
      p: 2, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: 'space-evenly',
      bgcolor: 'background.paper',
      color: 'text.primary',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'}
  }
  return (
    <Box  square  sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2}}>
      <Paper elevation={0} square sx={styles.container}>
        <PhoneAndroidIcon sx={{fontSize: 32}}/>
        <Typography fontSize={"1rem"} >
          +55 11 95168-3805
        </Typography>
        <Button color='primary'
          onClick={() => {
            window.open("https://wa.me/5511951683805", "_blank");
          }}
        >
          <WhatsAppIcon />
        </Button>
      </Paper>
      <Paper elevation={0} square sx={styles.container}>
        <AlternateEmailIcon sx={{fontSize: 32}}/>
        <Typography fontSize={"1rem"}>
          renata.sprado@outlook.com
        </Typography>
        <EmailModal/>
      </Paper>
    </Box>
  );

  function EmailModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    };
  
    return (
      <div>
        <Button onClick={handleOpen}><ForwardToInboxIcon/></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Message/>
          </Box>
        </Modal>
      </div>
    );
  }
};

export default ContactMe;