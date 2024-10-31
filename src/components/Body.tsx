import React from 'react';
import Intro from "@/components/Intro";
import SearchBar from "@/components/SearchBar";
import TopicWrapper from './TopicWrapper';
import EntryWrapper from './EntryWrapper';
import { Box } from '@mui/material';

const Body = () => {
  return (
    <Box>
      <Intro />
      <SearchBar />
      <TopicWrapper />
      <EntryWrapper />
    </Box>
  )
}

export default Body