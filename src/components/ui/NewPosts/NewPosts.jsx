
import { FormControl, InputLabel, Input, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


import apiBlog from '../../../api/apiBlog'
import './newposts.scss';


const NewPosts = () => {

    const [Tag, setTag] = useState('');
    const [Content, setContent] = useState('');
    const [File, setFile] = useState('');


    const handleSubmit = async () => {
        try {
            const reponse = await apiBlog.post('http://localhost:3000/authors',{
                "name": Tag,
                "birth": Content,
                "file": File
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log(reponse);
        } catch (error) {
            console.error(error);
        }
    }

    console.log(File.name)


    return(
        <div className="NewPosts_root">
            <FormControl sx={{ m: 1, width: '80ch' }}>
                <InputLabel htmlFor="my-input">Tag</InputLabel>
                <Input 
                    id="my-input" 
                    name="tag"
                    value={Tag}
                    onChange={e => setTag(e.target.value)}
                 />
            </FormControl>
            <TextareaAutosize 
                style={{ width: '95ch', borderRight: 'none', borderLeft: 'none', borderTop: 'none', outline: 'none', margin: '10px'}}
                className="posts_texttarea"
                aria-label="minimum height"
                minRows={5}
                placeholder="Posts Content:"
                name="content"
                value={Content}
                onChange={e => setContent(e.target.value)}
            /> <br />
            <input 
                multiple
                type="file"
                onChange={e => setFile(e.target.files[0])}

            />
            <Button 
                style={{ marginLeft: '80ch', marginBottom: '20px'}}variant="contained" endIcon={<SendIcon />}
                onClick={handleSubmit}
            >
                Save
            </Button>
        </div>
    )
}

export default NewPosts;