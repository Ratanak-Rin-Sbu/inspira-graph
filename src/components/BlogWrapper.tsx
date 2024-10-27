import React from 'react';
import Blog from './Blog';
import { Box, Grid } from '@mui/material';

type Props = {}

const BlogWrapper = (props: Props) => {
  return (
    <Box m="20px 0">
      <Grid container spacing={{ md: 4, xs: 3 }}>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog />
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogWrapper