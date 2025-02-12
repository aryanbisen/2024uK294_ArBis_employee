import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from "@mui/material";
import "./Navbar.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Navbar() {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button variant="contained" href="/">
                Aryan's employees
              </Button>

              <div id="login-button">
                {" "}
                <Button
                  href="/create-employee"
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                >
                  Create
                </Button>
                <Button href="/login" color="inherit">
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
