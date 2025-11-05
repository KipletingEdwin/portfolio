import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0d1117",
        color: "white",
        py: 6,
        px: 3,
        textAlign: "center",
      }}
    >
      {/* Animated footer text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          &copy; {new Date().getFullYear()} Edwin. All rights reserved.
        </Typography>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton href="https://github.com/yourusername" target="_blank" sx={{ color: "white" }}>
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://linkedin.com/in/yourusername" target="_blank" sx={{ color: "#0A66C2" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://twitter.com/yourusername" target="_blank" sx={{ color: "#1DA1F2" }}>
            <TwitterIcon />
          </IconButton>
        </Stack>
      </motion.div>
    </Box>
  );
}
