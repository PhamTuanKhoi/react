import React from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { useState } from 'react';

import api from '../../../api/apiBlog'
const CreateUser =() =>{
    const [Name, setName] = useState('');
    const [Birth, setBirth] = useState('');
    const [File, setFile] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit = async() => {
        try {
            await api.post('http://localhost:3000/users', {
            'name': Name,
            "username": Username,
            "password": Password,
            'birth': Birth,
            'file': File
            },{
                headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            setName('')
            setBirth('')
            setFile('')
            setUsername('')
            setPassword('')
            alert('sign in success');
        } catch (error) {
            console.log('err create user', error);
            alert('sign in to faile !')
        }
    }
    return(
        <Grid item xs>
            <h2 className="sign_title">Sign In</h2>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <FormControl sx={{ m: 2, width: '70ch' }}>
                <Input 
                    name="name"
                    value={Username}
                    onChange={e => setUsername(e.target.value)}
                />
            </FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <FormControl sx={{ m: 2, width: '70ch' }}>
                <Input 
                    name="name"
                    type="password"
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                />
            </FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <FormControl sx={{ m: 2, width: '70ch' }}>
                <Input 
                    name="name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
            </FormControl>
            <InputLabel htmlFor="my-input">Birth Day</InputLabel>
            <FormControl sx={{ m: 2, width: '70ch' }}>
                <Input 
                type="datetime-local"
                    name="birth"
                    value={Birth}
                    onChange={e => setBirth(e.target.value)}
                />
            </FormControl>
            <InputLabel htmlFor="my-input">Avatar</InputLabel>
            <FormControl sx={{ m: 2, width: '70ch' }}>
                <Input 
                    type="file"
                    name="avatar"
                    onChange={e => setFile(e.target.files[0])}
                />
            </FormControl>
            <Fab 
                style={{ marginLeft: '85%'}} 
                color="secondary" 
                aria-label="edit"
                onClick={handleSubmit}
            >
                Save
            </Fab>
        </Grid>
    )
}

export default CreateUser;

