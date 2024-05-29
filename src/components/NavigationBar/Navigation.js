import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";

const scroll = keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  `;

const ScrollingText = styled("div")({
  width: "100%",
  backgroundColor: "#007bff",
  color: "#fff",
  textAlign: "center",
  padding: "10px 0",
  position: "relative",
  overflow: "hidden",
  whiteSpace: "nowrap",
  "& div": {
    display: "inline-block",
    animation: `${scroll} 20s linear infinite`,
  },
  "& span": {
    display: "inline-block",
    paddingLeft: "100%",
  },
});

const Navigation = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Courses", link: "/courses" },
  ];
  return (
    <>
      <CssBaseline>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HVG Coding School
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <NavLink to={item.link} exact activeClassName="active">
                  <Button key={item.name} sx={{ color: "#fff" }}>
                    {item.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </CssBaseline>
      <ScrollingText>
        <div>
          <span>Website is under development</span>
          <span style={{ paddingLeft: "100%" }}>
            Website is under development
          </span>
        </div>
      </ScrollingText>
    </>
  );
};

export default Navigation;
