import React from "react";
import { Typography, Paper, Grid } from "@mui/material";

const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Vision
          </Typography>
          <Typography paragraph>
            To be a leading provider of coding education, empowering individuals
            to succeed in the digital world.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            Deliver high-quality coding courses that inspire, educate, and equip
            learners with in-demand skills.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Meet Our Instructors
          </Typography>
          <div>
            <Typography variant="h6">Instructor Name</Typography>
            <Typography>Professional Title</Typography>
            <Typography>
              Experience: Years of experience in the industry
            </Typography>
            <Typography>
              Background: Brief description of instructor's background and
              expertise
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
