"use client"

import React from 'react'
import { Box } from '@mui/material';
import { LocationOn, Call, Language, Instagram } from '@mui/icons-material';

const BlogDetail = () => {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        background: "#E4E0E1",
        p: {
          md: "20px 50px",
          xs: "10px 20px",
        },
        m: {
          md: "50px",
          xs: "0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mb: "10px",
        }}
      >
        <LocationOn sx={{mr: "15px"}}/>
        <Box
          className='khmer-text'
          sx={{
            fontSize: {
              xs: '1rem',
              md: '1rem',
            },
            color: "black",
          }}
        >
          សង្កាត់បឹងកេងកងទី៣ ខណ្ឌបឹងកេងកង
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "10px",
        }}
      >
        <Call sx={{mr: "15px"}}/>
        <Box
          className='khmer-text'
          sx={{
            fontSize: {
              xs: '1rem',
              md: '1rem',
            },
            color: "black",
          }}
        >
          ០១០-៦៨៧-១១១
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "10px",
        }}
      >
        <Language sx={{mr: "15px"}}/>
        <Box
          className='khmer-text'
          sx={{
            fontSize: {
              xs: '1rem',
              md: '1rem',
            },
            color: "#4DA0E0",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => window.open('https://www.facebook.com/profile.php?id=100086380850872', '_blank')}
        >
          វេបសាយ
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "10px",
        }}
      >
        <Instagram sx={{mr: "15px"}}/>
        <Box
          className='khmer-text'
          sx={{
            fontSize: {
              xs: '1rem',
              md: '1rem',
            },
            color: "#4DA0E0",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => window.open('https://www.instagram.com/sisobakerycambodia/', '_blank')}
        >
          អ៊ីនស្តាក្រាម
        </Box>
      </Box>
    </Box>
  )
}

export default BlogDetail