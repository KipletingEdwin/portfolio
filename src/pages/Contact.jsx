import React from "react";
import { Box, Typography, Stack, TextField, Button, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box
      id="contact"
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
        alignItems="flex-start"
        sx={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* Text Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: "linear-gradient(90deg, #3b82f6, #9333ea)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Talk
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, color: "rgba(255,255,255,0.85)" }}
            >
              I'm available for new projects! Feel free to reach out about anything.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 1, color: "rgba(96,165,250,1)" }}
            >
              kipletingedwin4@gmail.com
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.7)" }}
            >
              Hatfield, Hertfordshire, UK
            </Typography>
          </Box>
        </motion.div>

        {/* Form Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          style={{ flex: 1 }}
        >
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
      </Stack>
    </Box>
  );
}
