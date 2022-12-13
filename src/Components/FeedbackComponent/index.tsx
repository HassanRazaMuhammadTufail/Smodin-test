import React,{ FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import Rating from "../RatingComponent";

const Feedback: FunctionComponent = () => {
  const [essayRating, setEssayRating] = React.useState<number | null>(0);

  const [siteRating, setSiteRating] = React.useState<number | null>(0);

  const [submit, setSubmit] = React.useState<boolean>(false);

  const onSubmit = () => {
    if(essayRating === 5 && siteRating === 5) {
      setSubmit(true);
    }
  };

  const onReviewSubmit = () => {
    window.alert('Thanks for adding review');
    setEssayRating(0);
    setSiteRating(0);
    setSubmit(false);
  }
  return (
      <Box sx={{
        border: '1px solid #000',
        borderRadius: '10px',
        padding: '10px 15px',
        margin: '10px 0px',
      }}>
      <Typography variant="h3" sx={{
        textAlign: 'left',
        fontStyle: 'italic',
        margin: '5px 0'
        }}>Feedback</Typography>
      <hr />
      <Box sx={{
        padding: '10px 15px',
        margin: '10px 0px',
      }}>
          
          <Rating label="Essay Rating" value={essayRating} setValue={setEssayRating} />
          <Rating label="Site Rating" value={siteRating} setValue={setSiteRating} />
          <Button sx={{
            textTransform: 'none',
            float: 'right'
          }} variant="contained"  fullWidth={false} onClick={submit ? onReviewSubmit : onSubmit} >{submit? "Leave us a review" : "Submit"}</Button>
      </Box>
      </Box>
  )
}

export default Feedback;