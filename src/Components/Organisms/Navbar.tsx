import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Aryan's Employees
              </Typography>
              <Button href="/login" color="inherit">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </>
  );
}

export default Navbar;
