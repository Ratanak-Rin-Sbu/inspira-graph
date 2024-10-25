import React from 'react';
import { Box, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar: React.FC = () => {
  return (
    <Box>
      <TextField
        variant='filled'
        sx={{
          width: '100%',
          '.MuiFilledInput-root': {
            backgroundColor: '#e6e3e3',
            height: '50px',
            fontSize: '1.25rem',
            pb: '10px',
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
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        placeholder="Search..." // Place this outside of InputProps to avoid deprecation warning
      />
    </Box>
  );
};

export default SearchBar