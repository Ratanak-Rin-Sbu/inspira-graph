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
        fontFamily: 'var(--font-noto-serif-khmer), sans-serif',
        letterSpacing: '0.07em',
        fontSize: "1rem",
        backgroundColor: active ? "#ececec" : "#57c4ff31", // #57c4ff31, #da85c731, #7fb88133, #ff795736, #ffb05f45, #5e4fff31
        border: active ? "2px solid #808080" : "1px solid #c8c8c8",
        color: active ? "black" : "#808080",
      }}
      startIcon={<Icon sx={{ color: active ? 'black' : '#409ac0' }} />}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default Topic