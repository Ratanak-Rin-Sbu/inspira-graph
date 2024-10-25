import React from 'react'
import styles from "./intro.module.css";
import { Box } from '@mui/material';

const Intro = () => {
  return (
    <Box className={styles.container}>
      <Box className='khmer-text text-3xl'>សំណេរ</Box>
      <Box className='khmer-text text-lg' color="gray">ចែករំលែកបទពិសោទ៍របស់អ្នកតាមរយៈសំណេរ</Box>
    </Box>
  )
}

export default Intro