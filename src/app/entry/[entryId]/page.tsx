import React from 'react';
import { Box } from '@mui/material';

import Path from '@/components/Path';
import EntryDetail from '@/components/EntryDetail';
import ImageCover from '@/components/ImageCover';
import TextCover from '@/components/TextCover';

const dummyTexts = [
  {
    "text": "នៅក្នុងក្រសោបនៃក្លិនកាហ្វេក្តៅនិងនំផ្អែមស្រទន់ ស៊ីសូគឺជាទីកន្លែងសម្រាប់អ្នកដែលស្វែងរកភាពស្ងប់ស្ងាត់ និងភាពកក់ក្ដៅក្នុងការសម្រាកចិត្ត។ បរិយាកាសនៅទីនេះប្រៀបដូចមិត្តភក្តិដែលបង្រួមចិត្តមកជុំគ្នា។",
    "imgSrc": "/images/cafe2.png",
  },
  {
    "text": "នៅលើកៅអីដែលធ្វើពីឈើដែលមានភាពរឹងមាំ អ្នកអាចសម្រួលនឹងការញ៉ាំនំនិងផឹកកាហ្វេដែលមិនមានអ្វីតែពិតប្រាកដជាងនេះ។ អរគុណដែលស៊ីសូ បាននាំយើងជិតស្និទ្ធជាមួយអារម្មណ៍ត្រជាក់ក្តៅបែបជីវិតនេះ។",
    "imgSrc": "/images/cafe3.jpg",
  },
  {
    "text": "ដូចជាកន្លែងបោះតង់អាស្រ័យ ស៊ីសូនាំមកនូវបេះដូងកណ្តាលទីក្រុងដែលពោរពេញដោយចំណងជីវិត។ នំស្រួយៗនិងកាហ្វេក្តៅអាចធ្វើឱ្យការរស់នៅមានន័យខ្លាំងឡើងក្នុងក្លិនស្រទន់នៃអាហារដែលឆ្ងាញ់។",
    "imgSrc": "/images/cafe4.jpg",
  },
];

const Entry = ({ params }: { params: { entryId: string } }) => {
  const { entryId } = params;

  return (
    <Box 
      sx={{
        p: {
          md: "0 100px",
          xs: "0 10px"
        },
        m: "50px 0",
      }}
    >
      <Path />
      
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

      <ImageCover imgSrc="/images/cafe.jpg"/>

      {dummyTexts.map((text, i) => (
        <Box key={i}>
          <TextCover text={text.text} />
          <ImageCover imgSrc={text.imgSrc} />
        </Box>
      ))}
    </Box>
  );
};

export default Entry;