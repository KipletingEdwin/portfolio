import React from "react";
import { Box, Typography, Stack, Avatar, useMediaQuery, useTheme } from "@mui/material";
import profilePicture from '../assets/profile_img.jpg';

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 10,
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={6}
        alignItems="center"
        sx={{
          maxWidth: "1000px",
          width: "100%",
        }}
      >


        {/* Text Section */}
        <Box>
          {/* Gradient Heading */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(90deg, #3b82f6, #9333ea)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              maxWidth: "600px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Hi, I'm <strong>Edwin</strong> — a passionate front-end developer who loves
            crafting smooth, beautiful, and interactive web experiences. I enjoy
            working with modern technologies like React, TypeScript, and Material
            UI to bring ideas to life with performance and elegance.
          </Typography>

          {/* Optional: add more info */}
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            When I’m not coding, I explore UI design trends and learn new tools
            that make web development even more exciting.
          </Typography>
        </Box>
                {/* Profile Image  */}
                <Avatar
          alt="Edwin"
          src={profilePicture} 
          sx={{
            width: 180,
            height: 180,
            border: "3px solid #60a5fa",
            boxShadow: "0 0 25px rgba(96,165,250,0.3)",
          }}
        />
      </Stack>
    </Box>
  );
}
