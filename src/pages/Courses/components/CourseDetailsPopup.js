import React from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

const CourseDetailsComponent = ({ course, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{course.title}</DialogTitle>
      <DialogContent>
        <p>{course.description}</p>
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsComponent;
