import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#0d1b2a",
        color: "#fff",
        textAlign: "center",
        py: 3,
        mt: 5
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Anangi Bhanu Sri. All Rights Reserved.
      </Typography>
      <Box>
        <IconButton href="https://github.com/BhanusriAnangi" target="_blank" sx={{ color: "#90caf9" }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/bhanu-sri-anangi-2963b3248/" target="_blank" sx={{ color: "#90caf9" }}>
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:bhanuannagi1@gmail.com" sx={{ color: "#90caf9" }}>
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
