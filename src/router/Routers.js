import { Route, Routes } from "react-router-dom"
import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";


const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/create" element={<CreatePost />}/>
        </Routes>
    )
}

export default Routers;