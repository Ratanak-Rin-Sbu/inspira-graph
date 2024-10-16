import React from 'react';
import styles from "./navbar.module.css";
import { Button } from '@mui/material';
import Auth from '../auth/Auth';

const Navbar = () => {
  return (
    <div className={`${styles.container} khmer-text text-3xl`}>
      <div className={styles.logo}>អក្ខរាវិរុទ្ធ</div>
      
      <div className={styles.navigations}>
        <Button
          sx={{ fontFamily: 'var(--font-noto-serif-khmer), sans-serif' }}
          variant="text"
          color="inherit"
        >
          សំណេរ
        </Button>
        <Button
          sx={{ fontFamily: 'var(--font-noto-serif-khmer), sans-serif' }}
          variant="text"
          color="inherit"
        >
          សហគមន៍
        </Button>
        <Button
          sx={{ fontFamily: 'var(--font-noto-serif-khmer), sans-serif' }}
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