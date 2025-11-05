import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-center"
    >
      {/* Animated background */}
      <ParticlesBackground />

      {/* Foreground content */}
      <div className="z-10 px-4">
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          className="text-white"
        >
          Hi, I'm <span className="text-blue-400">Edwin</span>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          className="text-gray-400"
        >
          Frontend Developer • React • TypeScript
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
}
