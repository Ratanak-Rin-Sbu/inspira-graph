import React from 'react';
import Blog from './Blog';
import { Box, Grid } from '@mui/material';

const dummyBlogs = [
  {
    "imgSrc": "/images/cafe.jpg",
    "location": "ស៊ីសូកាហ្វេ​  បឹងកេងកង៣​​​ ភ្នំពេញ",
    "title": "ស៊ីសូកាហ្វេ: កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់"
  },
  {
    "imgSrc": "/images/cafe2.png",
    "location": "ប៊្លាក់ឃូស្ទេក​ ខណ្ឌចំការមន ភ្នំពេញ",
    "title": "អឃូស្ទេក: កន្លែងសម្រាប់អ្នកស្នេហាភេសជ្ជៈកាហ្វេ និងអារម្មណ៍ស្ងប់ស្ងាត់"
  },
  {
    "imgSrc": "/images/cafe3.jpg",
    "location": "កាហ្វេខេមបូ ខណ្ឌទួលគោក ភ្នំពេញ",
    "title": "កាហ្វេខេមបូ: បទពិសោធន៍សាមញ្ញបែបទំនើបសម្រាប់អ្នកស្នេហាភេសជ្ជៈកាហ្វេ"
  },
  {
    "imgSrc": "/images/cafe4.jpg",
    "location": "ស៊ីមកាហ្វេ​ សង្កាត់ចាក់អង្រែក្រោម ភ្នំពេញ",
    "title": "ស៊ីមកាហ្វេ: កន្លែងសម្រាប់ស្ថិតក្នុងអារម្មណ៍ស្ងប់ស្ងាត់ និងការសម្រាក"
  },
  {
    "imgSrc": "/images/cafe5.jpg",
    "location": "កាហ្វេផេកួខេ ខណ្ឌសែនសុខ ភ្នំពេញ",
    "title": "កាហ្វេផេកួខេ: ទស្សនីយភាពស្រស់ស្អាតសម្រាប់ការសម្រាក និងជួបជុំ"
  }
]

const BlogWrapper = () => {
  return (
    <Box p="20px 0">
      <Grid container spacing={{ md: 4, xs: 3 }}>
        {dummyBlogs.map((blog, i) => (
          <Grid item xs={6} md={4} key={i}>
            <Blog 
              imgSrc={blog.imgSrc}
              location={blog.location}
              title={blog.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BlogWrapper