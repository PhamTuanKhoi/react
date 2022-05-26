import * as React from 'react';

import MainLeft from '../components/ui/mainLeft/MainLeft';
import MainRight from '../components/ui/mainRight/MainRight';
import '../styles/Home.scss';
import NewPosts from '../components/ui/NewPosts/NewPosts';

const CreatePost = () => {
    return(
        <div className="home_page">
        <div className="home_left">
          <MainLeft />
        </div>
        <div className="home_main">
          <NewPosts />
        </div>
        <div className="home_right">
          <MainRight />
        </div>
      </div>
    )
}

export default CreatePost;