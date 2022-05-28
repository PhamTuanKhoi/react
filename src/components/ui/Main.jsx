import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './Main.scss';
import api from '../../api/apiBlog'
const Main = () => {

    const [Posts, setPosts] = useState([])
    
    
    const heighted = 260;

    const getAllUsers = async() =>{
        const reponse = await api.get('http://localhost:3000/posts');
        return reponse.data;
    }

    useEffect(()=>{
        const startRes = async () =>{
            const res = await getAllUsers();
            if(res) setPosts(res)
        }
        startRes();
    }, [])

    return(
        <div className="posts_root">
        {
                Posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <div className='posts_container'>
                        <Container>
                            <div className='posts_header'>
                                <Stack className='posts_infor' direction="row" spacing={2}>
                                    <Avatar className="avatar" alt="user1" src={`http://localhost:3000/${post.user.avatar}`} />
                                    <div className='posts_name'>{post.user.name}</div>
                                </Stack>
                                <div className='posts_time'>
                                    <i className="fa fa-clock-o" aria-hidden="true"></i> {post.user.createdAt}
                                    </div>
                            </div>
                            <div className="posts_main">
                                <div className="posts_content">
                                <p className="posts_tag">#{post.tag}</p> 
                                    {post.content}
                                </div>
                                <div className="posts_images">
                                    <ImageList sx={{ width: 650, height: {heighted} }} cols={3} rowHeight={164}>
                                    {post.image.map((img, index) => (
                                        <ImageListItem >
                                        <img key={index}
                                            alt={img.filename}
                                            src={`http://localhost:3000/${img.filename}?w=164&h=164&fit=crop&auto=format`} 
                                            srcSet={`http://localhost:3000/${img.filename}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} 
                                        />
                                        </ImageListItem>
                                    ))}
                                    </ImageList>        
                                </div>
                            </div>
                        </Container>
                    </div> <br /> <br /> 
                        </div>
                    )
                })
            }  
           
        </div>
        

        
    )
}

export default Main;

