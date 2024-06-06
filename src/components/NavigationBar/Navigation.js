import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Courses", link: "/courses" },
  ];

  return (
    <>
      <CssBaseline>
        <AppBar position="fixed" sx={{ marginBottom: "50px" }}>
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
                  <Button
                    key={item.name}
                    sx={{
                      color: "#fff",
                      marginRight: "10px",
                      borderRadius: "20px",
                      backgroundColor: "#3f51b5",
                    }}
                  >
                    {item.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {navItems.map((item) => (
                  <MenuItem key={item.name} onClick={handleMenuClose}>
                    <NavLink to={item.link} exact activeClassName="active">
                      <Button
                        sx={{
                          color: "#3f51b5",
                          width: "100%",
                          textTransform: "none",
                        }}
                      >
                        {item.name}
                      </Button>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </CssBaseline>
      <ScrollingText
        sx={{
          fontSize: { xs: "12px", sm: "16px" },
          marginTop: "60px",
          // marginBottom: "60px",
          // position: "fixed",
        }}
      >
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
