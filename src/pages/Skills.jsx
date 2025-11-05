import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

// List of technologies and logo URLs
const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

// Animation settings
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        px: 3,
      }}
    >
      {/* Gradient heading */}
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
        Skills 
      </Typography>

      {/* Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: "900px" }}
        >
          {skills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <motion.div variants={cardVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    textAlign: "center",
                    py: 4,
                    borderRadius: "12px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 0 20px rgba(96,165,250,0.3)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={skill.logo}
                    alt={skill.name}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "contain",
                      mx: "auto",
                      filter: "drop-shadow(0 0 4px rgba(255,255,255,0.2))",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mt: 1.5,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
