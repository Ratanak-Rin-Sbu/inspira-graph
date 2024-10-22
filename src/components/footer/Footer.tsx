"use client"
import React from 'react'

import { Box, Typography, Divider } from '@mui/material';
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
            mb: '15px'
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

        <Box  className='khmer-text text-md' marginBottom="5px">
          © ២០២៤​​​​​​​​​​​​​​​​ អក្ខរាវិរុទ្ធ By Veron. រក្សាគ្រប់យ៉ាង។
        </Box>

        <Box className='khmer-text text-sm' color="GrayText" sx={{ mb: "10px" }}>
          ដោយចូលប្រើប្រាស់ អ្នកយល់ព្រមថាអ្នកទទួលបាននូវការយល់ព្រមនឹងលក្ខខណ្ឌ និងសេវាកម្ម។
        </Box>
      </Box>
    </Box>
  );
}

export default Footer