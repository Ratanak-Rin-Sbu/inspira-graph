import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image';

type ImageCoverProps = {
  imgSrc: string;
}

const ImageCover: React.FC<ImageCoverProps> = ({ imgSrc }) => {
  return (
    <Box
        sx={{
          width: '100%',
          height: {
            md: 550,
            xs: 350,
          },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: "5px",
        }}
      >
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit='cover'
        />
      </Box>
  )
}

export default ImageCover