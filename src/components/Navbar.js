import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Slide, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  marginLeft: theme.spacing(2),
  transition: "0.3s ease",
  "&:hover": {
    color: "#90caf9",
    transform: "scale(1.1)",
  }
}));

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={{ backgroundColor: "#0d1b2a", boxShadow: 3 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "#ffffff" }}>
            Bhanu Sri
          </Typography>
          <Box>
            <StyledButton onClick={() => scrollToSection('home')}>Home</StyledButton>
            <StyledButton onClick={() => scrollToSection('about')}>About</StyledButton>
            <StyledButton onClick={() => scrollToSection('recent-work')}>Projects</StyledButton>
            <StyledButton onClick={() => scrollToSection('footer')}>Contact</StyledButton>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
