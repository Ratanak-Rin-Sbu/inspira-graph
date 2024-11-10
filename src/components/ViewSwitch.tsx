"use client"
import React, { useState } from 'react'
import { Box, TextField, Select, MenuItem, IconButton, Button } from '@mui/material'
import { Add, DragHandle } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image'
import styled from '@emotion/styled';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ImageCover from './ImageCover';

interface Block {
  id: number;
  type: 'text' | 'image';
  content: JSX.Element;
}

interface DraggableBlockProps {
  id: number;
  content: JSX.Element;
  moveBlock: (dragId: number, hoverId: number) => void;
}

const ItemType = {
  BLOCK: 'block',
};

const DraggableBlock: React.FC<DraggableBlockProps> = ({ id, content, moveBlock }) => {
  const [, ref] = useDrag({
    type: ItemType.BLOCK,
    item: { id },
  });

  const [, drop] = useDrop({
    accept: ItemType.BLOCK,
    hover: (item: { id: number }) => {
      if (item.id !== id) {
        moveBlock(item.id, id);
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      style={{ marginBottom: '10px' }}
    >
      {content}
    </div>
  );
};

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

  const [blocks, setBlocks] = useState<Block[]>([]);

  const moveBlock = (dragId: number, hoverId: number) => {
    const dragIndex = blocks.findIndex((block) => block.id === dragId);
    const hoverIndex = blocks.findIndex((block) => block.id === hoverId);
    const updatedBlocks = [...blocks];
    const [draggedBlock] = updatedBlocks.splice(dragIndex, 1);
    updatedBlocks.splice(hoverIndex, 0, draggedBlock);
    setBlocks(updatedBlocks);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleAddTextBlock = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) === 1) {
      setBlocks((prevBlocks) => [
        ...prevBlocks,
        {
          id: prevBlocks.length + 1,
          type: 'text',
          content: 
            <Box mb='25px'>
              <Box display='flex' alignItems='center' m='auto 0'>
                <DragHandle sx={{ mr: '10px', color: 'gray' }}/>
                <Box className='khmer-text' sx={{ fontSize: '1.2rem', mb: '0', }}>
                  ចំណុចគោល
                </Box>
              </Box>
              <TextField
                placeholder="បន្ថែមចំណុចគោលទីនេះ..." 
                fullWidth
                variant='standard'
                sx={{
                  '.MuiInputLabel-root': {
                    fontSize: '1rem',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  },
                  '.MuiInputLabel-shrink': {
                    fontSize: '1rem',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  },
                  '.MuiInputBase-root': {
                    fontSize: '1rem',
                    '& .MuiInputBase-input': {
                      fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    },
                  },
                }}
              />
            </Box>
        },
      ]);
    } else {
      setBlocks((prevBlocks) => [
        ...prevBlocks,
        {
          id: prevBlocks.length + 1,
          type: 'text',
          content: 
            <Box mb='25px'>
              <Box display='flex' alignItems='center' m='auto 0'>
                <DragHandle sx={{ mr: '10px', color: 'gray' }}/>
                <Box className='khmer-text' sx={{ fontSize: '1.2rem', mb: '0', }}>
                  កថាខណ្ឌ
                </Box>
              </Box>
              <TextField 
                multiline 
                placeholder="សរសេរកថាខណ្ឌនៅទីនេះ..." 
                fullWidth
                sx={{
                  '.MuiInputLabel-root': {
                    fontSize: '1rem',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    lineHeight: '1.2',
                  },
                  '.MuiInputLabel-shrink': {
                    fontSize: '1rem',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  },
                  '.MuiInputBase-root': {
                    fontSize: '1rem',
                    '& .MuiInputBase-input': {
                      fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                      lineHeight: '1.2',
                    },
                  },
                }}
              />
            </Box>
        },
      ]);
    }
    setOpen(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleAddImageBlock(imageUrl);
    }
  };

  const handleAddImageBlock = (imageUrl: string) => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      {
        id: prevBlocks.length + 1,
        type: 'image',
        content: 
          <Box sx={{
            mb: '25px',
            display: 'flex',
          }}>
            <DragHandle sx={{ mr: '10px', color: 'gray', }}/>
            <ImageCover imgSrc={imageUrl}/>
          </Box>
      },
    ]);
  }

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ mt: "40px", mb: "20px", display: "flex", flexDirection: "column"}}>
      {/* Tab Section */}
      <Box sx={{ display: "flex", gap: "20px", mb: "40px" }}>
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
            {/* Write Content */}
            <TextField
              label="សរសេរចំណងជើង"
              variant="standard"
              sx={{
                width: '50%',
                mb: '30px',
                '.MuiInputLabel-root': {
                  fontSize: '1.3rem',
                  fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  lineHeight: '1.8',
                  letterSpacing: '0.07em',
                },
                '.MuiInputLabel-shrink': {
                  fontSize: '1.3rem',
                  fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                },
                '.MuiInputBase-root': {
                  fontSize: '1.3rem',
                  '& .MuiInputBase-input': {
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    lineHeight: '1.8',
                    letterSpacing: '0.07em',
                  },
                },
              }}
            />

            <Box
              sx={{
                display: 'flex',
                mb: '40px',
              }}
            >
              <Box sx={{ position: 'relative', display: 'inline-block', mr: '20px' }} ref={anchorRef}>
                <IconButton onClick={handleToggle} sx={{ p: 0 }}>
                  <Add sx={{ color: '#5BBCFF' }}/>
                </IconButton>
                <Select
                  onChange={handleAddTextBlock}
                  open={open}
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  displayEmpty
                  MenuProps={{
                    anchorEl: anchorRef.current,
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    transformOrigin: {
                      vertical: 'top',
                      horizontal: 'left',
                    },
                  }}
                  sx={{ display: 'none' }}
                >
                  <MenuItem
                    value={1}
                    sx={{
                      fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                      lineHeight: '1.8',
                      letterSpacing: '0.07em',
                      fontSize: '1rem',
                    }}
                  >
                    បន្ថែមចំណុចគោល
                  </MenuItem>
                  <MenuItem
                    value={2}
                    sx={{
                      fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                      lineHeight: '1.8',
                      letterSpacing: '0.07em',
                      fontSize: '1rem',
                    }}
                  >
                    សរសេរអត្ថបទ
                  </MenuItem>
                </Select>
              </Box>
              <label htmlFor='imageUpload'>
                <ImageIcon sx={{mr: '20px', color: '#5BBCFF', cursor: 'pointer'}}/>
              </label>
              <input
                type="file"
                id="imageUpload"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Box>

            <DndProvider backend={HTML5Backend}>
              <Box>
                {blocks.map((block) => (
                  <DraggableBlock key={block.id} id={block.id} content={block.content} moveBlock={moveBlock} />
                ))}
              </Box>
            </DndProvider>

            {blocks.length !== 0 && (
              <Box display='flex' mt='50px'>
                <Button
                  variant='contained'
                  sx={{
                    mr: "20px",
                    width: '130px',
                    padding: '5px 0',
                    borderRadius: '15px',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    letterSpacing: '0.07em',
                    fontSize: "1rem",
                    backgroundColor: '#FA4032',
                  }}
                >
                  ត្រលប់ក្រោយ
                </Button>

                <Button
                  variant='contained'
                  sx={{
                    mr: "20px",
                    width: '130px',
                    padding: '5px 0',
                    borderRadius: '15px',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    letterSpacing: '0.07em',
                    fontSize: "1rem",
                    backgroundColor: '#399918',
                  }}
                >
                  និពន្ធ
                </Button>
              </Box>
            )}
          </Box>
        ) : (
          <Box>
            {/* Preview Content */}
            <p>Here is the Application content...</p>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ViewSwitch