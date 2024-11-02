import React from 'react';
import { Box } from '@mui/material';

type TextCoverProps = {
  text: string;
}

const TextCover: React.FC<TextCoverProps> = ({ text }) => {
  return (
    <Box
      className='khmer-text'
      sx={{
        fontSize: {
          xs: '1rem',
          md: '1.4rem',
        },
        m: "20px 0",
        color: '#595959',
      }}
    >
      {text}
    </Box>
  )
}

export default TextCover