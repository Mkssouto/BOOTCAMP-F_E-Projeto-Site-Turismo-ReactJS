import { Link } from 'react-router-dom';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "../avatar/avatar";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../assets/img/Tround_Ftransparente.png";
import './app-bar.css';

const pages = [
    {
        name: "CATÁLOGOS",
        link: 'catalog'
    },
    {
        name: "LOGIN",
        link: 'login'
    }, 
    {
        name: "CADASTRO",
        link: 'register'
    }
];
const LocalAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"
    sx={{
        backgroundColor: "#001b33"
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Avatar
                image={Logo}
                style={{
                    width: '150px',
                    display: 'block'
                }}
            />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}>
                  <Link to={`/${page.link}`}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box className="menu-item" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={`/${page.link}`}>{page.name}</Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/cart">
                <IconButton sx={{ p: 0, color: "#fff" }}>
                    <ShoppingCartIcon />
                </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LocalAppBar;