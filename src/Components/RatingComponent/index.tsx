import React, { FunctionComponent } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type Props = {
  label: String;
  value: number | null;
  setValue: (newValue: number | null) => void;
}

const RatingCustom: FunctionComponent<Props> = ({ label, value, setValue }) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        display: 'flex',
        margin: "10px"
      }}
    >
      <Typography 
        sx={{
          padding: '10px 10px',
          fontWeight: 'bold'
        }}
        >{label+ ": "}</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          fontSize: '2rem',
          padding: '10px 10px'
        }}
      />
    </Box>
  )
}

export default RatingCustom;

