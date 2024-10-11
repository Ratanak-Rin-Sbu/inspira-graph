import React from 'react'
import styles from "./navbar.module.css"
import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <div className={`${styles.container} khmer-text text-3xl`}>
      <div className={styles.logo}>អក្ខរាវិរុទ្ធ</div>
      <div className={styles.navigations}>
        <Button
          sx={{
            fontSize: '1.5rem',
            fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
            padding: "0 5px",
          }}
          variant="text"
          color="inherit"
        >
          សំណេរ
        </Button>
        <Button
          sx={{
            fontSize: '1.5rem',
            fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
            padding: "0 5px",
          }}
          variant="text"
          color="inherit"
        >
          សហគមន៍
        </Button>
        <Button
          sx={{
            fontSize: '1.5rem',
            fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
            padding: "0 5px"
          }}
          variant="text"
          color="inherit"
        >
          អំពី
        </Button>
      </div>
      <div className={styles.auth}>
        <Button
          sx={{
            fontSize: '1.35rem',
            fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
            // padding: "0 5px",
          }}
          variant="text"
          color="inherit"
        >
          លកអុីន
        </Button>
      </div>
    </div>
  )
}

export default Navbar