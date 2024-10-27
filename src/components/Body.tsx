import React from 'react';
import Intro from "@/components/Intro";
import SearchBar from "@/components/SearchBar";
import TopicWrapper from './TopicWrapper';
import BlogWrapper from './BlogWrapper';
import { Box } from '@mui/material';

const Body = () => {
  return (
    <Box>
      <Intro />
      <SearchBar />
      <TopicWrapper />
      <BlogWrapper />
    </Box>
  )
}

export default Body