import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, Typography } from "@mui/material";
import { Rating } from "@mui/material";

const CourseRatingPopup = ({ courseName, rating, onRatingChange, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{`Rate ${courseName}`}</DialogTitle>
      <DialogContent>
        <Typography className="mb-3" variant="body1">How would you rate this course?</Typography>
        <Rating name="course-rating" value={rating} onChange={onRatingChange} />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseRatingPopup;