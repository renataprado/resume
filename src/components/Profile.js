import React from 'react';
import { Box, Avatar } from '@mui/material';
import avatar from '../assets/avatar1.jpg';

function Profile() {
    return (
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 2,
          display: 'flex', flexDirection:'column',  alignItems: 'center', 
        }}
      >
        <div style={{ maxWidth: '160px' }}>
          <Avatar 
              alt="Renata Prado"
              src={avatar}
              sx={{ width: '100%', height: '100%' }}
            />
            <Box sx={{ color: 'text.primary', fontSize: 18, textAlign:'center', fontWeight: 'medium',  marginTop: 2} }>
              Renata Prado
            </Box>
        </div>
      </Box>
    );
}

const styles = {
  container: {
    width: '30vh',
    height: '95vh',
    margin: '10px',
    padding: '10px',
    borderRadius: '12px'
  },

  header:{
    h2: {
      color: 'white',
      backgroundColor: '#192734'
    }
  }
}
export default Profile;