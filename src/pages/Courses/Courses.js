import React, { useState } from "react";
import { staticCourses } from "./staticCourses";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import { importImage } from "../../utils/importImages";
import { REGISTRATION_LINK } from "../../utils/constants";
import CourseDetailsComponent from "./components/CourseDetailsPopup";
import CourseRatingPopup from "./components/CourseRatingPopup";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [rating, setRating] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setIsDetailsOpen(true);
  };

  const handleViewRating = () => {
    setIsRatingOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  const handleCloseRating = () => {
    setIsRatingOpen(false);
  };

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
    console.log(rating);
  };
  return (
    <div style={{ margin: "20px" }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#00000",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Courses
      </Typography>
      <Grid container spacing={3}>
        {staticCourses.map((course) => {
          const imagePath = importImage(course.id);
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={course.id}
              style={{ height: "420px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {imagePath && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={imagePath}
                    alt={course.title}
                  />
                )}
                <CardContent>
                  <Typography variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {course.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleViewDetails(course)}
                  >
                    View Details
                  </Button>
                  <Button size="small" onClick={handleViewRating}>
                    Rate Course
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => (window.location.href = REGISTRATION_LINK)}
                  >
                    Register
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => (window.location.href = course.course_path)}
                  >
                    learn Course
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
        {isDetailsOpen && (
          <CourseDetailsComponent
            course={selectedCourse}
            onClose={handleCloseDetails}
          />
        )}
        {isRatingOpen && (
          <CourseRatingPopup
            courseName={selectedCourse?.title}
            rating={rating}
            onRatingChange={handleRatingChange}
            onClose={handleCloseRating}
          />
        )}
      </Grid>
    </div>
  );
};

export default Courses;
