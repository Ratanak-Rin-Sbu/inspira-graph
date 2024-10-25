import React from 'react'
import { Button } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon';

type TopicProps = {
  icon: React.ComponentType<SvgIconProps>;
  label: string;
  active: boolean;
  onClick: () => void;
};

const Topic: React.FC<TopicProps> = ({ icon: Icon, label, active, onClick}) => {
  return (
    <Button
      variant='contained'
      sx={{
        mr: "20px",
        borderRadius: '50px',
        minWidth: "120px",
        // p: "10px 0",
        fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
        lineHeight: '1.8',
        letterSpacing: '0.07em',
        fontSize: "1rem",
        backgroundColor: active ? "#ececec" : "#dcf0fa",
        border: active ? "2px solid black" : "1.5px solid #c8c8c8",
        color: "black",
      }}
      startIcon={<Icon sx={{ color: active ? 'black' : '#409ac0' }} />}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default Topic