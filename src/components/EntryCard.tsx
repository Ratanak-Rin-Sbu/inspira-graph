"use client"

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type EntryCardProps = {
  imgSrc: string;
  name: string;
  location: string;
  title: string;
  entryId: number;
};

const EntryCard: React.FC<EntryCardProps> = ({ imgSrc, name, location, title, entryId }) => {
  const router = useRouter();

  const navigatePage = () => {
    router.push(`/entry/${entryId}`);
  };

  return (
    <Box
      onClick={navigatePage}
      display="flex"
      flexDirection="column"
      sx={{
        border: "1px solid #e3e0e0",
        borderRadius: "5px",
        width: '100%',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: {
            md: 250,
            xs: 120,
          },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: "5px 5px 0 0",
        }}
      >
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit='cover'
        />
      </Box>
      <Box p="10px 0 10px 10px">
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
          {name + ' ' + location}
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
          {title}
        </Box>
      </Box>
    </Box>
  )
}

export default EntryCard