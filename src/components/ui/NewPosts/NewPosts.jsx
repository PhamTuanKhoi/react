
import { FormControl, InputLabel, Input } from '@mui/material'; 
import { useState } from 'react';
import Fab from '@mui/material/Fab'; 
import TextField from '@mui/material/TextField';

import apiBlog from '../../../api/apiBlog'
import './newposts.scss';


const NewPosts = () => {

    const [Tag, setTag] = useState('');
    const [Content, setContent] = useState('');
    const [File, setFile] = useState([]);

    const formData = new FormData();

    const handleSubmit = async () => {
        try {
            for (let i = 0; i < File.length; i++) {
                formData.append(`files`, File[i])
            }
            formData.append("tag", Tag);
            formData.append("content", Content);
            const reponse = await apiBlog.post('http://localhost:3000/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log(reponse);
        } catch (error) {
            console.error(error);
        }
    }

    // for (let i = 0; i < File.length; i++) {
    //     const file = (`images[${i}]`, File[i])
    //     console.log(file)
    // }
console.log(formData);

    return(
        <div className="NewPosts_root">
            <h1 className="NewPosts_title">New Posts</h1>
            <InputLabel htmlFor="my-input">Tag</InputLabel>
                <FormControl sx={{ m: 3, width: '70ch' }}>
                    <Input 
                        id="my-input" 
                        name="tag"
                        onChange={e => setTag(e.target.value)}
                    />
                </FormControl>
            <InputLabel htmlFor="my-input">Content</InputLabel>
                <TextField  sx={{ m: 3, width: '70ch' }}
                id="standard-multiline-static"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                onChange={e => setContent(e.target.value)}
                />
            <InputLabel htmlFor="my-input">Images</InputLabel>
                <FormControl sx={{ m: 3, width: '70ch' }}>
                <input 
                    multiple
                    type="file"
                    onChange={e => setFile(e.target.files)}
                />
                </FormControl>
            <Fab 
                size="secondary" 
                color="secondary" 
                aria-label="add" 
                style={{ marginLeft: '85%'}}
                onClick={handleSubmit}
            >
                Save
            </Fab>
        </div>
    )
}

export default NewPosts;