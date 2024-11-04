"use client"

import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

type TopicProps = {
  destination: string;
};

const PathBox = styled(Box)(({}) => ({
  position: "relative",
  overflow: "hidden",
  marginRight: "10px",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "2px",
    backgroundColor: "#47AEC3",
    transition: "width 0.2s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

const Path: React.FC<TopicProps> = ({ destination }) => {
  const router = useRouter();

  const navigatePage = () => {
    router.push('/');
  };

  return (
    <Box
      sx={{
        fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
        letterSpacing: '0.07em',
        fontSize: "1.2rem",
        color: "#47AEC3",
        display: "flex",
        mb: "20px"
      }}
    >
      <PathBox onClick={navigatePage}>
        ទំព័រដើម
      </PathBox>
      <Box mr="10px">{">"}</Box>
      <PathBox>
        {destination}
      </PathBox>
    </Box>
  )
}

export default Path