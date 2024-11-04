"use client"
import React, { useState } from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled';

const ViewTitleBox = styled(Box)(({}) => ({
  fontSize: "1.2rem",
  cursor: "pointer",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "0.2rem",
    backgroundColor: "#4A4AD8",
    transition: "width 0.3s ease",
  },
}));

const ViewSwitch = () => {
  const [activeView, setActiveView] = useState<string | null>("write");

  const handleViewClick = (view : string) => {
    setActiveView(view);
  }

  return (
    <Box sx={{ mt: "40px", mb: "20px", display: "flex", flexDirection: "column"}}>
      {/* Tab Section */}
      <Box sx={{ display: "flex", gap: "20px", mb: "20px" }}>
        <ViewTitleBox
          className='khmer-text'
          onClick={() => handleViewClick("write")}
          sx={{
            color: activeView === "write" ? "#4A4AD8" : "#7d8699",
            width: {
              lg: "300px",
              xs: "100%",
            },
            "&::after": {
              width: activeView === "write" ? "100%" : "0%",
            },
            "&:hover": activeView === "write" ? {} : {
              color: "#373e4d",
              "&::after": {
                width: "100%",
                backgroundColor: "#d7dae0",
              },
            }
          }}
        >
          សរសេរ
        </ViewTitleBox>

        <ViewTitleBox
          className='khmer-text'
          onClick={() => handleViewClick("preview")}
          sx={{
            color: activeView === "preview" ? "#4A4AD8" : "#7d8699",
            width: {
              lg: "300px",
              xs: "100%",
            },
            "&::after": {
              width: activeView === "preview" ? "100%" : "0%",
            },
            "&:hover": activeView === "preview" ? {} : {
              color: "#373e4d",
              "&::after": {
                width: "100%",
                backgroundColor: "#d7dae0",
              },
            }
          }}
        >
          មើលសាកល្បង
        </ViewTitleBox>
      </Box>

      {/* Content Section */}
      <Box sx={{ width: "100%"}}>
        {activeView === "write" ? (
          <Box>
            {/* Overview Content */}
            <p>Here is the Overview content...</p>
          </Box>
        ) : (
          <Box>
            {/* Application Content */}
            <p>Here is the Application content...</p>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ViewSwitch