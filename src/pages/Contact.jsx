import React from "react";
import { Box, Typography, TextField, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";

export default function Contact() {
  // Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box
      id="contact"
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
      {/* Heading */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
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
          Contact Me
        </Typography>
      </motion.div>

      {/* Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ width: "100%", maxWidth: 500 }}
      >
        <motion.div variants={itemVariants}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "100%",
            }}
          >
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              InputProps={{
                sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "white" },
              }}
              InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
            />
            <TextField
              label="Email"
              variant="filled"
              type="email"
              fullWidth
              InputProps={{
                sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "white" },
              }}
              InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
            />
            <TextField
              label="Message"
              variant="filled"
              multiline
              rows={5}
              fullWidth
              InputProps={{
                sx: { backgroundColor: "rgba(255,255,255,0.05)", color: "white" },
              }}
              InputLabelProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #3b82f6, #9333ea)",
                color: "white",
                fontWeight: 600,
                py: 1.5,
                mt: 1,
                "&:hover": {
                  background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Stack direction="row" spacing={2} mt={6}>
          {[
            { icon: <GitHubIcon />, href: "https://github.com/yourusername", color: "white" },
            { icon: <LinkedInIcon />, href: "https://linkedin.com/in/yourusername", color: "#0A66C2" },
            { icon: <TwitterIcon />, href: "https://twitter.com/yourusername", color: "#1DA1F2" },
          ].map((social, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <IconButton href={social.href} target="_blank" sx={{ color: social.color }}>
                {social.icon}
              </IconButton>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
}
