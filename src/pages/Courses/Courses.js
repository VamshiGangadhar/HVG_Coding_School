import React from "react";
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

const Courses = () => {
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
                  <Button size="small">More Details</Button>
                  <Button size="small">View Ratings</Button>
                  <Button size="small" color="primary">
                    Register
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Courses;
