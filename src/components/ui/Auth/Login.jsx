import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

import api from '../../../api/apiBlog'

const LoginUi = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Token, setToken] = useState('');

  // Login handle
  const handleSubmit = async() => {
    try {
        const reponse = await api.post('http://localhost:3000/auths/login', {
          "username": Username,
          "password": Password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        setUsername('')
        setPassword('')
        setToken(reponse)
        alert('login in success');
    } catch (error) {
        console.log('err create user', error);
        alert('login in to faile !')
    }
  }
  // up to localStorage
  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(Token));
  },[Token]);

  return(
    <React.Fragment>
      <InputLabel htmlFor="my-input">Username</InputLabel>
          <FormControl sx={{ m: 2, width: '60ch' }}>
              <Input 
                  value={Username}
                  onChange={e => setUsername(e.target.value)}
              />
          </FormControl>
      <InputLabel htmlFor="my-input">Password</InputLabel>
          <FormControl sx={{ m: 2, width: '60ch' }}>
              <Input 
                  type="password"
                  value={Password}
                  onChange={e => setPassword(e.target.value)}
              />
          </FormControl>
      <DialogActions style={{marginRight: "15px"}}>
          <Button 
          variant="contained" 
          color="error" 
          autoFocus
          onClick={handleSubmit}
          >
            Login
          </Button>
      </DialogActions>
    </React.Fragment>
  )
}

export default LoginUi;