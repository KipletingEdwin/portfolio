import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#0d1117", boxShadow: "none", zIndex: 999 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1,
             fontWeight: "bold",
              cursor: "pointer",
              background: "linear-gradient(90deg, #3b82f6, #9333ea)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            
            }}
        >
          Edwin
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              smooth={true}
              duration={500}
              offset={-70} // navbar height
            >
              <Button
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                  "&:hover": { color: "#60a5fa" },
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{ sx: { backgroundColor: "#0d1117", color: "white" } }}
          >
            <List sx={{ width: 200, height: "100%" }}>
              {menuItems.map((item) => (
                <ListItem key={item.label}>
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setOpen(false)}
                    style={{ width: "100%", textDecoration: "none" }}
                  >
                    <Button sx={{ color: "white", width: "100%" }}>
                      {item.label}
                    </Button>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
