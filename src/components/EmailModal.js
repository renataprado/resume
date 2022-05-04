import { useState, useEffect, useRef} from "react";
import { Modal, TextField, Button, Box, Backdrop, CircularProgress, Alert} from "@mui/material"
import SendIcon from "@mui/icons-material/Send";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export default function EmailModal(props) {
  const [open, setOpen] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [fields, setFields] = useState({nome: "", email: "", mensagem: ""}) ;
  const [errors, setErrors] = useState({}) ;
  const [feedback, setFeedback] = useState("");

  let valid = useRef();

  useEffect(() => {
    if(Object.keys(errors).length === 3){
      if(!(errors.name || errors.email || errors.mensagem)){
        valid.current = true
      }
    }   
  }, [errors])

  const handleInputChange = (e) => {
    const value =  e.target.value;
    const name = e.target.name;
    setFields(values => ({...values, [name]: value}));
    validateFields(name)
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); setOpenBackdrop(false)};
  
  function validateFields (field){
    switch (field) {
      case 'nome': 
        if(fields.nome.length < 2){handleErrors("nome", true)} 
        else{(handleErrors("nome", false))}
        break;
      case 'email':
        var emailRegex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (emailRegex.test(fields.email)) { 
          (handleErrors( "email", false)) 
        } else {handleErrors("email", true)  }
        break;
      case 'mensagem': 
        if (fields.mensagem.length < 2) {handleErrors("mensagem", true)}
        else{(handleErrors("mensagem", false))}
        break;
      default:
    }

    function handleErrors(name, value){
      if(value){valid.current=false}
      setErrors(values => ({...values, [name]: value}));
    }
  }

  function handleSubmit(){
    for (const key in fields) {
      validateFields(key);
    }
    if(valid.current){
      submitEmail()
    }
  }

  function submitEmail() {
    setFeedback("sending")
    setOpenBackdrop(true);
    fetch("https://soft-lollipop-39da5c.netlify.app/.netlify/functions/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    })
      .then((response) => {
        if(response.status === 200) {
          setFeedback('success'); 
          setFields({nome: "", email: "", mensagem: ""})
        }
        if(response.status === 500 ) setFeedback('error')
        return response.json();
      })
      .then((data) => {
        //console.log(data);
      });

  }

  const Feedback = () => {
    switch (feedback) {
      case 'sending': return <CircularProgress color="primary" />
      case 'success': return(
          <Alert variant="filled" severity="success">
            Sua mensagem foi enviada! :)
          </Alert>)
      case 'error': return (
          <Alert variant="filled" severity="error">
            Ops! Ocorreu um erro. Sua mensagem não foi enviada :(
          </Alert>)
      default:
        return <Box/>
    }
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
          <Backdrop
            sx={{ color: 'background.default', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
            onClick={() => setOpenBackdrop(false)}
          >
            <Feedback />
          </Backdrop>
          <Box component="form" sx={style.messageContainer}>
            <TextField fullWidth size="small" label="Nome" name="nome"
              error={errors.nome} value={fields.nome} onChange={handleInputChange}/>
            <TextField fullWidth size="small" label="Email" name="email" 
            error={errors.email} value={fields.email} onChange={handleInputChange} />
            <Box sx={{ display: "flex" }}>
              <TextField  label="Mensagem" multiline fullWidth rows={4} name="mensagem" 
               error={errors.mensagem} value={fields.mensagem} onChange={handleInputChange} />
              <Button onClick={handleSubmit}>
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
    width: "88%",
    maxWidth: 540,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    borderRadius: 5
  },
  messageContainer: {
    width: "100%",
    maxWidth: 800,
    gap: 1.5,
    display: "flex",
    flexDirection: "column",
  },
};
