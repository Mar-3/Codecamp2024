'use client'
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Tooltip, Avatar, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import * as React from "react";


// Add view name here to add link to app bar.
const pages = ['Base', 'View2','Notice'];


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const notLoggedInSettings = ['Login', 'Register'];


export const Navbar = ({changeView, loggedIn, }) => {


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getUserSettings = () => {
    return (
      !loggedIn ? notLoggedInSettings : settings
    );
  }
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
          display={{ xs:"flex", md:"none"}}
          onClick={handleOpenNavMenu}
          >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 5 }}
            
          >
            <MenuIcon/>
          </IconButton>
          </Box>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

          <Typography
            variant="h6"
            noWrap
            component="div"
          sx={{mr:5, display: { xs: 'none', sm: 'block' } }}
          >
            Skinnarila Notification Board
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  changeView(page);
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="ASD"/>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              {
                getUserSettings().map((setting) => (
                  <MenuItem key={setting} onClick={() => {
                    handleCloseUserMenu;
                    changeView(setting);
                  }}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>

          </Box>


        </Toolbar>
      </AppBar>
    </Box>

  )
}