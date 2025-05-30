import React from 'react';
import EntryCard from './EntryCard';
import { Box, Grid } from '@mui/material';

const dummyEntries = [
  {
    "imgSrc": "/images/cafe.jpg",
    "name": "ស៊ីសូកាហ្វេ",
    "location": "បឹងកេងកង៣​​​ ភ្នំពេញ",
    "title": "ស៊ីសូកាហ្វេ: កន្លែងសម្រាកសម្រាប់ការងារសង្គម និងការផ្តល់បទពិសោធន៍ថ្មីៗនៅកម្រិតខ្ពស់",
    "entryId": 1,
  },
  {
    "imgSrc": "/images/cafe2.png",
    "name": "អឃូស្ទេក",
    "location": "ខណ្ឌចំការមន ភ្នំពេញ",
    "title": "អឃូស្ទេក: កន្លែងសម្រាប់អ្នកស្នេហាភេសជ្ជៈកាហ្វេ និងអារម្មណ៍ស្ងប់ស្ងាត់",
    "entryId": 2,
  },
  {
    "imgSrc": "/images/cafe3.jpg",
    "name": "កាហ្វេខេមបូ",
    "location": "ខណ្ឌទួលគោក ភ្នំពេញ",
    "title": "កាហ្វេខេមបូ: បទពិសោធន៍សាមញ្ញបែបទំនើបសម្រាប់អ្នកស្នេហាភេសជ្ជៈកាហ្វេ",
    "entryId": 3,
  },
  {
    "imgSrc": "/images/cafe4.jpg",
    "name": "ស៊ីមកាហ្វេ",
    "location": "សង្កាត់ចាក់អង្រែក្រោម ភ្នំពេញ",
    "title": "ស៊ីមកាហ្វេ: កន្លែងសម្រាប់ស្ថិតក្នុងអារម្មណ៍ស្ងប់ស្ងាត់ និងការសម្រាក",
    "entryId": 4,
  },
  {
    "imgSrc": "/images/cafe5.jpg",
    "name": "កាហ្វេផេកួខេ",
    "location": "ខណ្ឌសែនសុខ ភ្នំពេញ",
    "title": "កាហ្វេផេកួខេ: ទស្សនីយភាពស្រស់ស្អាតសម្រាប់ការសម្រាក និងជួបជុំ",
    "entryId": 5,
  }
]

const EntryWrapper = () => {
  return (
    <Box p="20px 0">
      <Grid container spacing={{ md: 4, xs: 3 }}>
        {dummyEntries.map((entry, i) => (
          <Grid item xs={6} md={4} key={i}>
            <EntryCard 
              imgSrc={entry.imgSrc}
              name={entry.name}
              location={entry.location}
              title={entry.title}
              entryId={entry.entryId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default EntryWrapper;