import { Routes, Route } from "react-router-dom"

import Posts from "./pages/posts";
import Users from "./pages/users";

import DetailsPost from "./pages/detailsPost";
import DetailsUser from "./pages/detailsUser";

export const RoutesApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Posts/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/post/:id" element={<DetailsPost/>}/>
            <Route path="/user/:id" element={<DetailsUser/>}/>
        </Routes>
    )
}
