"use client"

import React, { useState } from 'react';
import Link from "next/link";
import styles from "./auth.module.css";
import { Button, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
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
            លកអុីន
          </Button>
        </div>
      ) : (
        <div className={styles.auth}>
          <ThemeToggle />
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
            លកអោត
          </Button>
        </div>
      )}

      {/* MOBILE MENU BUTTON */}
      {isMobile && (
        <div className={styles.mobileMenu}>
          <ThemeToggle />
          <MenuIcon
            className={styles.menu}
            onClick={() => setOpen(!open)} 
            sx={{ fontSize: '2rem' }}
          />
        </div>
      )}

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">សំណេរ</Link>
          <Link href="/">សហគមន៍</Link>
          <Link href="/">អំពី</Link>
          {status === "notauthenticated" ? (
            <Link href="/">លកអុីន</Link>
          ) : (
            <Link href="/">លកអោត</Link>
          )}
        </div>
      )}
    </>
  )
}

export default Auth