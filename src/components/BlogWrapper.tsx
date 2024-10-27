import React from 'react';
import Blog from './Blog';
import { Box, Grid } from '@mui/material';

type Props = {}

const BlogWrapper = (props: Props) => {
  return (
    <Box p="20px 0">
      <Grid container spacing={{ md: 4, xs: 3 }}>
        <Grid item xs={6} md={4}>
          <Blog 
            imgSrc='/images/cafe.jpg'
            location='ស៊ីសូកាហ្វេ​  បឹងកេងកង៣​​​ ភ្នំពេញ'
            title='ស៊ីសូកាហ្វេ: កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់'
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog 
            imgSrc='/images/cafe.jpg'
            location='ស៊ីសូកាហ្វេ​  បឹងកេងកង៣​​​ ភ្នំពេញ'
            title='ស៊ីសូកាហ្វេ: កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់'
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Blog 
            imgSrc='/images/cafe.jpg'
            location='ស៊ីសូកាហ្វេ​  បឹងកេងកង៣​​​ ភ្នំពេញ'
            title='ស៊ីសូកាហ្វេ: កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់'
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogWrapper