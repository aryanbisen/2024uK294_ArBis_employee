import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button variant="contained">Aryan's employees</Button>
              <div id="login-button">
                <Button  href="/login" color="inherit">
                  Login
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </>
  );
}

export default Navbar;
