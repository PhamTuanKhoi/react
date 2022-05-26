import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './Main.scss';
import user1 from '../../assets/images/user1.jpg';

const Main = () => {
    return(
        <div className="posts_root">
            <div className='posts_container'>
            <Container>
                <div className='posts_header'>
                    <Stack className='posts_infor' direction="row" spacing={2}>
                        <Avatar className="avatar" alt="user1" src={user1} />
                        <div className='posts_name'>Pham Tuan Khoi</div>
                    </Stack>
                    <div className='posts_time'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i> 05/26/2022 11:58
                        </div>
                </div>
                <div className="posts_main">
                    <div className="posts_content">TUNG CÁNH THẬT COOL - ĂN MỪNG VÔ ĐỊCH
🇻🇳 Huy chương vàng đã chính thức về tay đội tuyển Việt Nam và 97 triệu người hâm mộ!
🔥 U23 Việt Nam đã có màn trình diễn ấn tượng suốt 90 phút gây cấn, với pha "tung cánh" chói sáng cực cool của các tuyển thủ Việt Nam vào những giây phút cuối cùng của hiệp 2. Đánh bại U23 Thái Lan, đội nhà đã thành công bảo vệ ngôi vị vô địch SEA Games với đầy niềm tự hào và hãnh diện!!!. Cùng “tung cánh” cho chiến thắng vang dội này anh em ơi, cháy lên… Xem thêm
                    </div>
                    <div className="posts_images">
                        <ImageList sx={{ width: 650, height: 450 }} cols={4} rowHeight={164}>
                        {itemData.map((item, index) => (
                            <ImageListItem key={index}>
                            <img className="avatar"
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>        
                    </div>
                </div>
            </Container>
        </div> <br /> <br /> 
        <div className='posts_container'>
            <Container>
                <div className='posts_header'>
                    <Stack className='posts_infor' direction="row" spacing={2}>
                        <Avatar alt="user1" src={user1} />
                        <div className='posts_name'>Pham Tuan Khoi</div>
                    </Stack>
                    <div className='posts_time'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i> 05/26/2022 11:58
                        </div>
                </div>
                <div className="posts_main">
                    <div className="posts_content">TUNG CÁNH THẬT COOL - ĂN MỪNG VÔ ĐỊCH
🇻🇳 Huy chương vàng đã chính thức về tay đội tuyển Việt Nam và 97 triệu người hâm mộ!
🔥 U23 Việt Nam đã có màn trình diễn ấn tượng suốt 90 phút gây cấn, với pha "tung cánh" chói sáng cực cool của các tuyển thủ Việt Nam vào những giây phút cuối cùng của hiệp 2. Đánh bại U23 Thái Lan, đội nhà đã thành công bảo vệ ngôi vị vô địch SEA Games với đầy niềm tự hào và hãnh diện!!!. Cùng “tung cánh” cho chiến thắng vang dội này anh em ơi, cháy lên… Xem thêm
                    </div>
                    <div className="posts_images">
                        <ImageList sx={{ width: 650, height: 450 }} cols={4} rowHeight={164}>
                        {itemData.map((item, index) => (
                            <ImageListItem key={index}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>        
                    </div>
                </div>
            </Container>
        </div>

        </div>
        
    )
}

export default Main;

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
      },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },  
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmiVqPrBJLCkOb27zN9pjPJalYqCWuXsWQQ&usqp=CAU',
        title: 'men'
    }  
  ];