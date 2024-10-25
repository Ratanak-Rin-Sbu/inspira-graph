"use client"

import React, { useState } from 'react';
import styles from "./auth.module.css";
import { useMediaQuery, Box } from '@mui/material'
import { Logout, Login , Menu, Close } from '@mui/icons-material';
import ThemeToggle from "../themeToggle/ThemeToggle";

const Auth = () => {
  const [open, setOpen] = useState(false);

  // temporary
  const status = "notauthenticated";

  const isMobile = useMediaQuery('(max-width: 935px)');

  return (
    <>
      {status === "notauthenticated" ? (
        <div className={styles.auth}>
          <ThemeToggle />
          <Login sx={{ cursor: "pointer" }}/>
        </div>
      ) : (
        <div className={styles.auth}>
          <ThemeToggle />
          <Logout sx={{ cursor: "pointer" }}/>
        </div>
      )}

      {/* MOBILE MENU BUTTON */}
      {isMobile && (
        <>
          <div className={styles.mobileMenu}>
            <ThemeToggle />
            <Menu
              className={styles.menu}
              onClick={() => setOpen(!open)} 
              sx={{ fontSize: '2rem' }}
            />
          </div>
          <Box className={styles.overlay} display={open ? 'block' : 'none'}></Box>
        </>
      )}

      {open && (
        <div className={styles.responsiveMenu}>
          <Box display="flex" justifyContent="space-between" mb="40px">
            <Box className='khmer-text' fontSize="1.7rem">អក្ខរាវិរុទ្ធ</Box>
            <Close onClick={() => setOpen(!open)} sx={{ fontSize: '2rem', m: 'auto 0' }}/>
          </Box>
          <Box mb="20px">សំណេរ</Box>
          <Box mb="20px">សហគមន៍</Box>
          <Box mb="20px">អំពី</Box>
          {status === "notauthenticated" ? (
            <Box>លកអ៊ីន</Box>
          ) : (
            <Box>លកអោត</Box>
          )}
        </div>
      )}
    </>
  )
}

export default Auth