import Login from "../Pages/LogIn/Login"
import Info from "../Pages/Info/Info"
import Menu from "../Pages/Menu/Menu"
import { Routes, Route, Navigate } from "react-router-dom"
export default function UnprotectedRoutes(){

    return <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Login" element={<Login onLogin={() => {}} />} />
        <Route path='/Info' element={<Info onInfo={() => {}} />} />
        <Route path='*' element={<Navigate to={'/'}/>} />
    </Routes>
}