import React from 'react';
import Intro from "@/components/Intro";
import SearchBar from "@/components/SearchBar";
import TopicWrapper from './TopicWrapper';
import { Box } from '@mui/material';

const Body = () => {
  return (
    <Box minHeight="80vh">
      <Intro />
      <SearchBar />
      <TopicWrapper />
    </Box>
  )
}

export default Body