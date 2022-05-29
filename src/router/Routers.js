import { Route, Routes } from "react-router-dom"
import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";


const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/create" element={<CreatePost />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}

export default Routers;