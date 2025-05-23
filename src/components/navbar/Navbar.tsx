"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

import styles from "./navbar.module.css";
import Auth from '../auth/Auth';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={`${styles.container} khmer-text text-3xl`}>
      <div className={styles.logo} onClick={() => router.push('/')}>អក្ខរាវិរុទ្ធ</div>
      
      <div className={styles.navigations}>
        <Button
          sx={{ 
            fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
            padding: "0 5px",
            '&:hover': {
              transition: "200ms",
              borderRadius: "5px",
            }
          }}
          variant="text"
          color="inherit"
        >
          សំណេរ
        </Button>
        <Button
          sx={{ 
            fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
            padding: "0 5px",
            '&:hover': {
              transition: "200ms",
              borderRadius: "5px",
            }
          }}
          variant="text"
          color="inherit"
        >
          សហគមន៍
        </Button>
        <Button
          sx={{ 
            fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
            padding: "0 5px",
            '&:hover': {
              transition: "200ms",
              borderRadius: "5px",
            }
          }}
          variant="text"
          color="inherit"
        >
          អំពី
        </Button>
      </div>

      <Auth />
    </div>
  )
}

export default Navbar