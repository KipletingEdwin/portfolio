import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Foreground content */}
      <Box sx={{ position: "relative", zIndex: 10, px: 3 }}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // triggers every scroll
          variants={fadeUp}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 2,
            }}
          >
            Hi, I'm <Box component="span" sx={{ color: "#3b82f6" }}>Edwin</Box>
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "rgba(156,163,175,1)",
              mb: 3,
            }}
          >
            Frontend Developer • React • TypeScript
          </Typography>
        </motion.div>

        {/* Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="contained"
            href="#projects"
            sx={{
              mt: 3,
              background: "#3b82f6",
              "&:hover": { background: "#2563eb" },
            }}
          >
            View My Work
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
