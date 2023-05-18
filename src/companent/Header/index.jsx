import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Style from "./index.module.css";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{display:"flex" , justifyContent:"center", alignItems:"center", flexDirection:"column",textAlign:"start"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/services">Services</Link>
        </div>
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={Style.navbar} position="static">
          <Toolbar>
            <div className={Style.hamburger}>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon/>
                  </Button>
                </React.Fragment>
              ))}
            </div>

            <Typography
              variant="h6"
              component="p"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ flexGrow: 1 }}
              className={Style.links}
             
            >
            {/* <div> */}
            <Button className={Style.btn} color="inherit">
              <Link to="/">Home</Link>
            </Button>
            <Button className={Style.btn} color="inherit">
              <Link to="/about">About</Link>
            </Button>
            <Button className={Style.btn} color="inherit">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button className={Style.btn} color="inherit">
              <Link to="/login">Login</Link>
            </Button>
            <Button className={Style.btn} color="inherit">
              <Link to="/register">Register</Link>
            </Button>
            <Button className={Style.btn} color="inherit">
              <Link to="/services">Services</Link>
            </Button>
            {/* </div> */}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
