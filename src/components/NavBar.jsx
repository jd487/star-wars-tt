import React from "react";
import { Toolbar, Typography, Box, AppBar } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit">Star Wars Top Trumps</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
