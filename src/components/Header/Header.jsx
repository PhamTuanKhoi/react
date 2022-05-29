import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

import api from '../../api/apiBlog'
import './Header.scss'

const Header = () => {
  const isLogin = true;
  const [Token, setToken] = useState('');

  // const currentUser = async() =>{
  //   const reponse = await api.post('http://localhost:3000/auths/currentUser', {
  //         "req_token": token.data.access_token
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       })
  //       return reponse;
  // }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    setToken(token);

    if( token !== '' && token !== null) {
    
      api.post('http://localhost:3000/auths/currentUser', {
              "req_token": token.data.access_token
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(data => console.log(data))
            .catch(err => console.error(err))    
    }

  }, [Token])
    return(
        <div>
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
              <NavLink 
                  style={{ textDecoration: 'none' }}
                  to="/create"
                  className={(navClass) =>
                    navClass.isActive ? "active" : "noactive"
                  }
                >
                  CREATE&nbsp;&nbsp;&nbsp;
                </NavLink>
              </Typography>
              {
                isLogin && <React.Fragment>
                              <Button color="inherit" >
                                  <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login"
                                    className={(navClass) =>
                                      navClass.isActive ? "active" : "noactive"
                                    } 
                                  >
                                    Login
                                  </NavLink>
                              </Button>
                              <Button color="inherit">
                                <NavLink
                                  style={{ textDecoration: 'none' }}
                                  to="/signin"
                                  className={(navClass) =>
                                    navClass.isActive ? "active" : "noactive"
                                  } 
                                >
                                  Signin
                                </NavLink>
                              </Button>
                </React.Fragment>
              }
            </Toolbar>
          </AppBar>
        </Box>

      </div>
    )
}

export default Header;

