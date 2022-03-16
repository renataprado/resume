import { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SendIcon from "@mui/icons-material/Send";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import {
  Box,
  Paper,
  Link,
  Typography,
  Button,
  TextField,
  IconButton,
  Grid,
  Modal,
} from "@mui/material";
import { bgcolor } from "@mui/system";

function ContactMe(props) {
  const mobile = props.mobile;
  const [active, setActive] = useState(false);
  const secs = 0;

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), secs);
  }, []);

    return (
      <Box
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {!mobile ? (
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Contato
          </Typography>
        ) : (
          <Box />
        )}
        <Box
          sx={{
            width: "100%",
            height: 3,
            bgcolor: "primary.main",
            animation: "slide 1200ms ",
            mb:2
          }}
        />
        <Grid
          container
          alignItems="center"
          rowSpacing={2}
          columnSpacing={{ sm: 2, md: 3, lg: 4 }}
        >
          <Grid item sm={12} md={12} lg={6}>
            <Paper elevation={0} square sx={styles.paperContainer}>
              <PhoneAndroidIcon sx={{ fontSize: 32 }} />
              <Typography fontSize={"1rem"}>+55 11 95168-3805</Typography>
              <Button
                color="primary"
                onClick={() => {
                  window.open("https://wa.me/5511951683805", "_blank");
                }}
              >
                <WhatsAppIcon />
              </Button>
            </Paper>
          </Grid>
          <Grid item sm={12} md={12} lg={6}>
            <Paper elevation={0} square sx={styles.paperContainer}>
              <AlternateEmailIcon sx={{ fontSize: 32 }} />
              <Typography fontSize={"1rem"}>
                renata.sprado@outlook.com
              </Typography>
              <EmailModal />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
}

const styles = {
  paperContainer: {
    height: "8vh",
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
    animation: 'fadein 0.4s'
  },
};

function EmailModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    modalContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
    },
    messageContainer: {
      width: "100%",
      maxWidth: 800,
      gap: 1.5,
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <ForwardToInboxIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modalContainer}>
          <Box sx={style.messageContainer}>
            <TextField fullWidth size="small" label="Nome" />
            <TextField fullWidth size="small" label="Email" />
            <Box sx={{ display: "flex" }}>
              <TextField label="Mensagem" multiline fullWidth rows={3} />
              <Button>
                <SendIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ContactMe;
