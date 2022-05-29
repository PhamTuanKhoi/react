import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import '../styles/Auth.scss';
import CreateUser from '../components/ui/Auth/CreateUser';



const Signin = () => {


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
                     <CreateUser />                    
                </Grid>
              </Grid>
            </Grid>
            </Paper>
        </div>
    )
}

export default Signin;