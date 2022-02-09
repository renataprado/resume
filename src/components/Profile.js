import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import avatar from '../assets/avatar1.jpg';

function Profile() {
    return (
      <Box
        sx={{
          p: 2,
          display: 'flex', 
          flexDirection:'column',  
          alignItems: 'center', 
        }}
      >
        <div style={{ maxWidth: '160px' }}>
          <Avatar 
              alt="Renata Prado"
              src={avatar}
              sx={{ width: '100%', height: '100%', maxWidth: 160 }}
            />
            <Typography variant="h5" sx={{color: 'text.primary', p:1}}>Renata Prado</Typography>
        </div>
      </Box>
    );
}

const styles = {
}
export default Profile;