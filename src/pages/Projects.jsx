import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React, MUI, and Vite. Features animations, smooth navigation, and a particle background.",
    image: "https://via.placeholder.com/400x200",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A task management app with authentication and CRUD features, built using React, Zustand, and Firebase.",
    image: "https://via.placeholder.com/400x200",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "An admin dashboard that visualizes sales, products, and customers using React and Recharts.",
    image: "https://via.placeholder.com/400x200",
    demoLink: "#",
    codeLink: "#",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <Box
      id="projects"
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
        My Projects
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1100px" }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.03 }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: "0 0 25px rgba(96,165,250,0.3)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "rgba(255,255,255,0.95)",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      href={project.demoLink}
                      target="_blank"
                      startIcon={<OpenInNewIcon />}
                      sx={{
                        color: "#60a5fa",
                        textTransform: "capitalize",
                        "&:hover": { color: "#93c5fd" },
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      href={project.codeLink}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{
                        color: "#a78bfa",
                        textTransform: "capitalize",
                        "&:hover": { color: "#c4b5fd" },
                      }}
                    >
                      View Code
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
