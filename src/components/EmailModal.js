import { useState, useRef } from "react";
import { Modal, TextField, Button, Box} from "@mui/material"
import SendIcon from "@mui/icons-material/Send";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export default function EmailModal() {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function submitEmail() {
    fetch("http://localhost:5000/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( new Object({nome, email, mensagem})),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

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
          <Box component="form" sx={style.messageContainer}>
            <TextField fullWidth size="small" label="Nome" value={nome} onChange={(event)=>{setNome(event.target.value);}}/>
            <TextField fullWidth size="small" label="Email"  value={email} onChange={(event)=>{setEmail(event.target.value);}} />
            <Box sx={{ display: "flex" }}>
              <TextField label="Mensagem" multiline fullWidth rows={3} value={mensagem} onChange={(event)=>{setMensagem(event.target.value);}} />
              <Button onClick={submitEmail}>
                <SendIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}


const style = {
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  },
  messageContainer: {
    width: "100%",
    maxWidth: 800,
    gap: 1.5,
    display: "flex",
    flexDirection: "column",
  },
};
