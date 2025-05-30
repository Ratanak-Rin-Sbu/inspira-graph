"use client"
import React from 'react'

import { Box, Divider } from '@mui/material';
import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box>
      <Divider />
      <Box>
        <Box
          sx = {{
            display: "flex",
            justifyContent: "space-between",
            mb: '15px',
            mt: '5px'
          }}
        >
          <div className="khmer-text text-2xl">អក្ខរាវិរុទ្ធ</div>

          <Box display="flex" justifyContent="space-between" alignItems="end" margin="auto 0">
            <Instagram 
              fontSize='medium' 
              style={{ marginLeft: "40px", cursor: 'pointer' }}
              onClick={() => window.open('', '_blank')}
            />
            <LinkedIn
              fontSize='medium' 
              style={{ marginLeft: "40px", cursor: 'pointer' }}
              onClick={() => window.open('', '_blank')}
            />
            <GitHub
              fontSize='medium' 
              style={{ marginLeft: "40px", cursor: 'pointer' }}
              onClick={() => window.open('https://github.com/Ratanak-Rin-Sbu/inspira-graph', '_blank')}
            />
          </Box>
        </Box>

        <Box 
          className='khmer-text'
          sx={{
            mb: '5px',
            fontSize: {
              md: '1rem',
              xs: '0.95rem',
            },
          }}
        >
          © ២០២៤​​​​​​​​​​​​​​​​ អក្ខរាវិរុទ្ធ By Veron. រក្សាសិទ្ធគ្រប់យ៉ាង។
        </Box>

        <Box className='khmer-text text-sm' color="GrayText" sx={{ pb: "10px" }}>
          ដោយចូលប្រើប្រាស់ អ្នកយល់ព្រមថាអ្នកទទួលបាននូវការយល់ព្រមនឹងលក្ខខណ្ឌ និងសេវាកម្ម។
        </Box>
      </Box>
    </Box>
  );
}

export default Footer