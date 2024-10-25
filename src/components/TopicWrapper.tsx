"use client"

import React, { useState } from 'react';
import Topic from './Topic';
import { Box } from '@mui/material';
import { Storefront, Restaurant } from '@mui/icons-material';

type Props = {}

const TopicWrapper = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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