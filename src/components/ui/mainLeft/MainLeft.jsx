import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import user1 from '../../../assets/images/user1.jpg';


const MainLeft = () => {
    return (
    <div>
        <div>User</div>
        <Stack direction="row" spacing={2}>
            <Avatar alt="user1" src={user1} />
            <div>Pham Tuan Khoi</div>
        </Stack>
    </div>
    )
}

export default MainLeft;