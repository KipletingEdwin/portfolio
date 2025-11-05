import React from "react";
import { Box, Typography, Stack, Avatar, useMediaQuery, useTheme } from "@mui/material";
import profilePicture from '../assets/profile_img.jpg';
import { motion } from "framer-motion";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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
        sx={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* Text Section */}
        <Box>
          {/* Gradient Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 6,
                background: "linear-gradient(90deg, #3b82f6, #9333ea)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
              }}
            >
              About Me
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>
        </Box>

        {/* Profile Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.6 }}
        >
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
        </motion.div>
      </Stack>
    </Box>
  );
}
