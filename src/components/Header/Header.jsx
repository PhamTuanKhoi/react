import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

import './Header.scss'

const Header = () => {
    return(
        <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 100}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" >
              <NavLink style={{ textDecoration: 'none' }}
                 to="/home"
                 className={(navClass) =>
                  navClass.isActive ? "active" : "noactive"
                }
              >
                 POSTS&nbsp;&nbsp;&nbsp;
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" className="header_title" sx={{ flexGrow: 1 }}>
            <NavLink style={{ textDecoration: 'none' }}
                 to="/create"
                 className={(navClass) =>
                  navClass.isActive ? "active" : "noactive"
                }
              >
                 CREATE&nbsp;&nbsp;&nbsp;
              </NavLink>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header;

