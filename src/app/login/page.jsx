"use client"
import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

import styles from './loginPage.module.css';

const page = () => {
  const router = useRouter();

  const navigatePage = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowBack}>
        <ArrowBack
          onClick={navigatePage}
          fontSize='large'
          sx={{
            cursor: "pointer",
            ":active": {
              backgroundColor: "#789DBC",
              // backgroundColor: "black",
              transition: 'background-color 0.3s',
            }
          }}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Googles</div>
        <div className={styles.socialButton}>Sign in with GitHub</div>
        <div className={styles.socialButton}>Sign in with FaceBook</div>
      </div>
    </div>
  )
}

export default page