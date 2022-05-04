import EmailModal from "./EmailModal";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
} from "@mui/material";

export default function ContactMe(props) {
  const mobile = props.mobile;

    return (
      <Box sx={{width: "100%", pb:1 }} >
        {!mobile ? (
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Contato
          </Typography>
        ) : (
          <Box />
        )}
        <Box
          sx={{
            width: "75%",
            height: 3,
            bgcolor: "primary.main",
            animation: "slide-in 800ms",
            mb:2
          }}
        />
        <Box sx={{p:2}}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ lg: 6 }}
          >
            <Grid item xs={12} lg={6}>
              <Paper elevation={0} square sx={styles.paperContainer}>
                <PhoneAndroidIcon sx={{ fontSize: "2rem" }} />
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
            <Grid item xs={12} lg={6}>
              <Paper elevation={0} square sx={styles.paperContainer}>
                <AlternateEmailIcon sx={{ fontSize: "2rem", mr: 1 }} />
                <Typography fontSize={"1rem"}>
                  renata.sprado@outlook.com
                </Typography>
                <EmailModal />
              </Paper>
            </Grid>
          </Grid>
          </Box>
      </Box>
    );
}


const styles = {
  paperContainer: {
    height: "8vh",
    minWidth: "18rem",
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 3px 0px",
    animation: 'fadein 0.4s'
  },
};

