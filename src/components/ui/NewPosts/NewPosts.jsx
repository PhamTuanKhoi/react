
import { FormControl, InputLabel, Input, FormHelperText, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



import './newposts.scss';


const NewPosts = () => {
    return(
        <div className="NewPosts_root">
            <FormControl sx={{ m: 1, width: '80ch' }}>
            <InputLabel htmlFor="my-input">Tag</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <TextareaAutosize className="posts_texttarea"
            aria-label="minimum height"
            minRows={5}
            placeholder="Posts Content:"
            style={{ width: '95ch', borderRight: 'none', borderLeft: 'none', borderTop: 'none', outline: 'none', margin: '10px'}}
            /> <br />
            <input 
            multiple
            type="file"
            />
            <Button style={{ marginLeft: '80ch', marginBottom: '20px'}}variant="contained" endIcon={<SendIcon />}>
                Save
            </Button>
        </div>
    )
}

export default NewPosts;