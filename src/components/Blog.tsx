import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import ImageAnn from "../../public/images/imageAnn.png"

type Props = {}

const Blog = (props: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        border: "1px solid #e3e0e0",
        borderRadius: "5px",
        width: '100%',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
      }}
    >
      <Box flexBasis="60%">
        <Image
          src="/images/cafe.jpg"
          alt=""
          layout="responsive"
          width={300}
          height={300}
          style={{ borderRadius: "5px 5px 0 0" }}
        />
      </Box>
      <Box flexBasis="40%" p="10px 0 10px 10px">
        <Box
          className='khmer-text'
          sx={{
            mb: {
              md: "10px",
              xs: "5px"
            },
            color: "GrayText",
            fontSize: {
              xs: '0.8rem',
              md: '1rem',
            },
            width: '100%',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          ស៊ីសូកាហ្វេ​  បឹងកេងកង៣​​​ ភ្នំពេញ
        </Box>
        <Box
          className='khmer-text'
          sx={{
            fontSize: {
              xs: '1rem',
              md: '1.5rem',
            },
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            lineHeight: 1.5,
          }}
        >
          ស៊ីសូកាហ្វេ: កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់
        </Box>
      </Box>
    </Box>
  )
}

export default Blog