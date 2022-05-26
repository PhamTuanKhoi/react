import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import user1 from '../../../assets/images/user1.jpg';
import './MainLeft.scss';
import apiUsers from '../../../api/apiBlog'



const MainLeft = () => {
    const [users, setUsers] = useState([]);
    
    
    
    const getAllUsers = async() =>{
        const reponse = await apiUsers.get('https://jsonplaceholder.typicode.com/users');
        return reponse.data;
    }

    useEffect(()=>{
        const startRes = async () =>{
            const res = await getAllUsers();
            if(res) setUsers(res)
        }
        startRes();
    }, [])
    





    return (
    <div className="MainLeft_root">
        <p>User</p>
        {
            users.map((user, index) => {
                return (
                    <Stack key={index} direction="row" spacing={2} className="mainLeft_row">
                        <Avatar alt="user1" src={user1} />
                        <div>{user.name}</div>
                    </Stack> 
                )
            })
        }
    </div>
    )
}

export default MainLeft;

