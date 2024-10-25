"use client"

import React, { useState } from 'react';
import Topic from './Topic';
import { Box } from '@mui/material';
import { Storefront, Restaurant } from '@mui/icons-material';

const TopicWrapper = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleTopicClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{m: "20px 0"}} display="flex">
      <Topic
        icon={Storefront}
        label="កាហ្វេ"
        active={activeIndex === 0}
        onClick={() => handleTopicClick(0)}
      />
      <Topic
        icon={Restaurant}
        label="អាហារ"
        active={activeIndex === 1}
        onClick={() => handleTopicClick(1)}
      />
    </Box>
  )
}

export default TopicWrapper