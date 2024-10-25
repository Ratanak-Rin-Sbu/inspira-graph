import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

type Props = {}

const SearchBar: React.FC = (props: Props) => {
  return (
    <Box mb="40px">
      <TextField
        variant='filled'
        sx={{
          width: '100%',
          '.MuiFilledInput-root': {
            backgroundColor: '#e6e3e3',
            height: '50px',
            fontSize: '1.25rem',
            pb: '15px',
            '&:before': {
              borderBottomColor: '#d1cece',
            },
            '&:after': {
              borderBottomColor: '#d1cece',
            },
            '&:hover': {
              '&:before, &:after': {
                display: 'none',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
              lineHeight: '1.8',
              letterSpacing: '0.07em',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        placeholder="តើអ្នកកំពុងស្វែងរកសំណេរណាមួយឬ?"
      />
    </Box>
  );
};

export default SearchBar