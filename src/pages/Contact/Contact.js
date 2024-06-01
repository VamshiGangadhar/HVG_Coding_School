import React from "react";
import { Typography, Paper, Grid, Button, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:vamshi.gangadhar365@gmail.com";
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon color="primary" />
            <Typography variant="h6" style={{ marginLeft: "10px" }}>
              Email:{" "}
              <Button
                onClick={handleEmailClick}
                style={{ textTransform: "none" }}
              >
                vamshi.gangadhar365@gmail.com
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
