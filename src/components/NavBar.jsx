import React from "react";
import { Toolbar, Typography, Box, AppBar } from "@mui/material";

//NOTES: I would of created more components (typography component etc) if I had more time/was going to reuse them

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
