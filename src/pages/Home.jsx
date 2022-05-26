import * as React from 'react';

import MainLeft from '../components/ui/mainLeft/MainLeft';
import MainRight from '../components/ui/mainRight/MainRight';
import Main from '../components/ui/Main';
import '../styles/Home.scss';

const Home = () => {
    return (
     <div className="home_page">
       <div className="home_left">
         <MainLeft />
       </div>
       <div className="home_main">
         <Main />
       </div>
       <div className="home_right">
         <MainRight />
       </div>
     </div>
    )
}

export default Home;



