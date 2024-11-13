"use client"
import React, { ReactNode, useRef, useState } from 'react'
import { Box, TextField, Select, MenuItem, IconButton, Button, SelectChangeEvent, FormControl, InputLabel } from '@mui/material'
import { Add, DragHandle } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image'
import styled from '@emotion/styled';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ImageCover from './ImageCover';
import EntryDetail from './EntryDetail';
import TextCover from './TextCover';

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

  const [blocks, setBlocks] = useState<Block[]>([
    {
      id: 1,
      type: 'image',
      content: 
        <Box sx={{
          mb: '25px',
          display: 'flex',
        }}>
          <DragHandle sx={{ mr: '10px', color: 'gray', }}/>
          <ImageCover imgSrc='/images/cafe.jpg'/>
        </Box>
    },
    {
      id: 2,
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
            value='នៅក្នុងក្រសោបនៃក្លិនកាហ្វេក្តៅនិងនំផ្អែមស្រទន់ ស៊ីសូគឺជាទីកន្លែងសម្រាប់អ្នកដែលស្វែងរកភាពស្ងប់ស្ងាត់ និងភាពកក់ក្ដៅក្នុងការសម្រាកចិត្ត។ បរិយាកាសនៅទីនេះប្រៀបដូចមិត្តភក្តិដែលបង្រួមចិត្តមកជុំគ្នា។'
            sx={{
              '.MuiInputLabel-root': {
                fontSize: '1.2rem',
                fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                letterSpacing: '0.05em',
                lineHeight: '1.8',
              },
              '.MuiInputLabel-shrink': {
                fontSize: '1.2rem',
                fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
              },
              '.MuiInputBase-root': {
                fontSize: '1.2rem',
                '& .MuiInputBase-input': {
                  fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  letterSpacing: '0.05em',
                  lineHeight: '1.8',
                },
              },
            }}
          />
        </Box>
    },
    {
      id: 3,
      type: 'image',
      content: 
        <Box sx={{
          mb: '25px',
          display: 'flex',
        }}>
          <DragHandle sx={{ mr: '10px', color: 'gray', }}/>
          <ImageCover imgSrc='/images/cafe2.png'/>
        </Box>
    },
    {
      id: 4,
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
            value='នៅលើកៅអីដែលធ្វើពីឈើដែលមានភាពរឹងមាំ អ្នកអាចសម្រួលនឹងការញ៉ាំនំនិងផឹកកាហ្វេដែលមិនមានអ្វីតែពិតប្រាកដជាងនេះ។ អរគុណដែលស៊ីសូ បាននាំយើងជិតស្និទ្ធជាមួយអារម្មណ៍ត្រជាក់ក្តៅបែបជីវិតនេះ។'
            sx={{
              '.MuiInputLabel-root': {
                fontSize: '1.2rem',
                fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                letterSpacing: '0.05em',
                lineHeight: '1.8',
              },
              '.MuiInputLabel-shrink': {
                fontSize: '1.2rem',
                fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
              },
              '.MuiInputBase-root': {
                fontSize: '1.2rem',
                '& .MuiInputBase-input': {
                  fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  letterSpacing: '0.05em',
                  lineHeight: '1.8',
                },
              },
            }}
          />
        </Box>
    },
    {
      id: 5,
      type: 'image',
      content: 
        <Box sx={{
          mb: '25px',
          display: 'flex',
        }}>
          <DragHandle sx={{ mr: '10px', color: 'gray', }}/>
          <ImageCover imgSrc='/images/cafe3.jpg'/>
        </Box>
    },
    {
      id: 6,
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
            value='ដូចជាកន្លែងបោះតង់អាស្រ័យ ស៊ីសូនាំមកនូវបេះដូងកណ្តាលទីក្រុងដែលពោរពេញដោយចំណងជីវិត។ នំស្រួយៗនិងកាហ្វេក្តៅអាចធ្វើឱ្យការរស់នៅមានន័យខ្លាំងឡើងក្នុងក្លិនស្រទន់នៃអាហារដែលឆ្ងាញ់។'
            sx={{
              '.MuiInputLabel-root': {
                fontSize: '1.2rem',
                fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                letterSpacing: '0.05em',
                lineHeight: '1.8',
              },
              '.MuiInputLabel-shrink': {
                fontSize: '1.2rem',
                fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
              },
              '.MuiInputBase-root': {
                fontSize: '1.2rem',
                '& .MuiInputBase-input': {
                  fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  letterSpacing: '0.05em',
                  lineHeight: '1.8',
                },
              },
            }}
          />
        </Box>
    },
  ]);

  const moveBlock = (dragId: number, hoverId: number) => {
    const dragIndex = blocks.findIndex((block) => block.id === dragId);
    const hoverIndex = blocks.findIndex((block) => block.id === hoverId);
    const updatedBlocks = [...blocks];
    const [draggedBlock] = updatedBlocks.splice(dragIndex, 1);
    updatedBlocks.splice(hoverIndex, 0, draggedBlock);
    setBlocks(updatedBlocks);
  };

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const [openTopic, setOpenTopic] = useState(false);
  const [topic, setTopic] = useState('');
  

  const handleAddTextBlock = (event: SelectChangeEvent<string>, child: ReactNode) => {
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
                    fontSize: '1.2rem',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    letterSpacing: '0.05em',
                    lineHeight: '1.8',
                  },
                  '.MuiInputLabel-shrink': {
                    fontSize: '1.2rem',
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  },
                  '.MuiInputBase-root': {
                    fontSize: '1.2rem',
                    '& .MuiInputBase-input': {
                      fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                      letterSpacing: '0.05em',
                      lineHeight: '1.8',
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

  const renderBlockContentWithoutDragHandle = (content: React.ReactElement) => {
    return React.cloneElement(content, {
      children: React.Children.map(content.props.children, (child) => {
        return child.type === DragHandle ? null : child;
      }),
    });
  };

  const handleReadBlock = (block: Block): React.ReactElement => {
    if (block.type === 'image' && React.isValidElement(block.content)) {
      const contentElement = block.content as React.ReactElement;
  
      const imageCover = React.Children.toArray(contentElement.props.children).find(
        (child) => React.isValidElement(child) && child.type === ImageCover
      ) as React.ReactElement<{ imgSrc: string }>;
  
      return <ImageCover imgSrc={imageCover?.props.imgSrc} />;
    } else if (block.type === 'text' && React.isValidElement(block.content)) {
      const contentElement = block.content as React.ReactElement;
  
      const textField = React.Children.toArray(contentElement.props.children).find(
        (child) => React.isValidElement(child) && child.type === TextField
      ) as React.ReactElement<{ value: string }>;
  
      return <TextCover text={textField?.props.value} />;
    }
  
    return <></>;
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

            <br></br>

            <FormControl sx={{ minWidth: '130px', mb: '20px' }}>
              <InputLabel
                sx={{
                  fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  lineHeight: '1.8',
                  letterSpacing: '0.07em',
                  fontSize: '1rem',
                  // display: topic === '' ? 'block' : 'none',
                }}
              >
                ប្រធានបទ
              </InputLabel>
              <Select
                onChange={(e: SelectChangeEvent<string>) => setTopic(e.target.value)}
                open={openTopic}
                onOpen={() => setOpenTopic(true)}
                onClose={() => setOpenTopic(false)}
                label='ប្រធានបទ'
                sx={{
                  fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                  lineHeight: '1.8',
                  letterSpacing: '0.07em',
                  fontSize: '1rem',
                }}
              >
                <MenuItem
                  value='ហាងកាហ្វេ'
                  sx={{
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    lineHeight: '1.8',
                    letterSpacing: '0.07em',
                    fontSize: '1rem',
                  }}
                >
                  ហាងកាហ្វេ
                </MenuItem>
                <MenuItem
                  value='ហាងអាហារ'
                  sx={{
                    fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
                    lineHeight: '1.8',
                    letterSpacing: '0.07em',
                    fontSize: '1rem',
                  }}
                >
                  ហាងអាហារ
                </MenuItem>
              </Select>
            </FormControl>

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
          // Preview content
          <Box>                
            <Box
              className='khmer-text'
              sx={{
                fontSize: {
                  xs: '1.5rem',
                  md: '2rem',
                },
                mb: "10px",
              }}
            >
              ស៊ីសូកាហ្វេ - កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់
            </Box>
      
            <Box
              className='khmer-text'
              sx={{
                fontSize: {
                  xs: '1rem',
                  md: '1.2rem',
                },
                color: "#808080",
                fontStyle: "italic",
                mb: "20px",
              }}
            >
              ថ្ងៃព្រហស្បតិ៍ ទី៣១ ខែតុលា ឆ្នាំ២០២៤
            </Box>
      
            <EntryDetail />

            {blocks.map((block) => (
              handleReadBlock(block)
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ViewSwitch