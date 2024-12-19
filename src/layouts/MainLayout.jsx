import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useColorMode } from '../themes/tema';
import { useAuth } from '../hooks/useAuth';
import Footer from '../components/FooterComponent';
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {
  const { toggleColorMode } = useColorMode();
  const { user, logout } = useAuth();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
     // eslint-disable-next-line no-self-assign
     window.location.href = window.location.href;
  };

  const isLoggedIn = () => !!localStorage.getItem("token");

  const iconSize = 'small';
  const iconSpacing = 2; 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo App
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={toggleColorMode} size={iconSize}> 
              {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            {isLoggedIn() && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: iconSpacing }}> 
                <IconButton
                  size={iconSize} 
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar alt={user?.name || "User"} src="/static/images/avatar/1.jpg" sx={{ width: iconSize === 'small' ? 24 : iconSize === 'medium' ? 32: 40, height: iconSize === 'small' ? 24 : iconSize === 'medium' ? 32: 40 }}/> {/* Avatar con tamaño ajustable */}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom', 
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                  sx={{mt:1}}
                >
                  <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '16px' }}>{children}</main>
      <Footer />
    </Box>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};