import React from 'react';
import { Box } from '@mui/material';

import Path from '@/components/Path';
import ViewSwitch from '@/components/ViewSwitch';

const page = () => {
  return (
    <Box 
      sx={{
        p: {
          md: "0 100px",
          xs: "0 10px"
        },
        m: "50px 0",
      }}
    >
      <Path destination="និពន្ធ"/>

      <ViewSwitch />
    </Box>
  )
}

export default page