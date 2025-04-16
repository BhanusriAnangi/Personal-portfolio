import React, { useState, useEffect } from "react";
import { Box, Typography, Fade } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SlideBox = styled(Box)(({ background }) => ({
  height: "100vh",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "2rem",
  animation: `${fadeIn} 2s ease-in-out`
}));

const AnimatedText = styled(Typography)(({ delay }) => ({
  color: "#fff",
  animation: `${fadeIn} 1.5s ease-out ${delay || "0s"} both`,
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" }
  }
}));

const slides = [
  {
    background:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1400&q=80",
    heading: "Hi, I'm Anangi Bhanu Sri",
    subtext: "A Full Stack Developer passionate about building modern web experiences."
  },
  {
    background:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Code. Create. Innovate.",
    subtext: "Turning ideas into reality with React, Node.js, MongoDB, and more."
  },
  {
    background:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    heading: "“Innovation is the ability to see change as an opportunity — not a threat.”",
    subtext: "- Steve Jobs"
  }
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <Fade in={true} timeout={1000}>
      <SlideBox background={slides[index].background}>
        <AnimatedText variant="h3" sx={{ fontWeight: 700 }} delay="0.2s">
          {slides[index].heading}
        </AnimatedText>
        <AnimatedText variant="h5" sx={{ mt: 2 }} delay="0.4s">
          {slides[index].subtext}
        </AnimatedText>
      </SlideBox>
    </Fade>
  );
};

export default Home;