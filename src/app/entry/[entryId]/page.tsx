import React from 'react';
import { Box } from '@mui/material';

import Path from '@/components/Path';
import EntryDetail from '@/components/EntryDetail';

const Entry = ({ params }: { params: { entryId: string } }) => {
  const { entryId } = params;

  return (
    <Box 
      sx={{
        p: {
          md: "0 100px",
          xs: "0 20px"
        },
        m: "50px 0",
      }}
    >
      <Path />
      
      <Box
        className='khmer-text'
        sx={{
          fontSize: {
            xs: '1rem',
            md: '2rem',
          },
          mb: "10px",
        }}
      >
        ស៊ីសូកាហ្វេ - កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់
      </Box>

      <Box
        className='khmer-text'
        sx={{
          fontSize: {
            xs: '1rem',
            md: '1.2rem',
          },
          color: "#808080",
          fontStyle: "italic",
          mb: "20px",
        }}
      >
        ថ្ងៃព្រហស្បតិ៍ ទី៣១ ខែតុលា ឆ្នាំ២០២៤
      </Box>

      <EntryDetail />
    </Box>
  );
};

export default Entry;