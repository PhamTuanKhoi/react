import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Input } from '@mui/material';
import Fab from '@mui/material/Fab';

import api from '../api/apiBlog'
import '../styles/Auth.scss';



const Signin = () => {

    const [Name, setName] = useState('');
    const [Birth, setBirth] = useState('');
    const [File, setFile] = useState('');


    const handleSubmit = async() => {
        try {
            const reponse = await api.post('http://localhost:3000/users', {
            'name': Name,
            'birth': Birth,
            'file': File
            },{
                headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            console.log(reponse);
        } catch (error) {
            console.log('err create user', error);
        }
    }

    console.log(File);
    return(
        <div style={{paddingTop: '100px'}}>
            <Paper
        sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 600,
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
        >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
                <h2 className="sign_title">Sign In</h2>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <FormControl sx={{ m: 5, width: '60ch' }}>
                    <Input 
                        id="my-input" 
                        name="name"
                        onChange={e => setName(e.target.value)}
                    />
                </FormControl>
                <InputLabel htmlFor="my-input">Birth Day</InputLabel>
                <FormControl sx={{ m: 5, width: '60ch' }}>
                    <Input 
                    type="datetime-local"
                        id="my-input" 
                        name="birth"
                        onChange={e => setBirth(e.target.value)}
                    />
                </FormControl>
                <InputLabel htmlFor="my-input">Avatar</InputLabel>
                <FormControl sx={{ m: 5, width: '60ch' }}>
                    <Input 
                        type="file"
                        id="my-input" 
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
        </Grid>
       </Grid>
      </Grid>
    </Paper>
        </div>
    )
}

export default Signin;