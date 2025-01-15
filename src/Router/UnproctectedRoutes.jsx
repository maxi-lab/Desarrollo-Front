import Login from "../Pages/LogIn/Login"
import Info from "../Pages/Info/Info"
import Menu from "../Pages/Menu/Menu"
import RestorantesPage from "../Pages/RestourantesPage/RestourantesPage"
import { Routes, Route, Navigate } from "react-router-dom"
import ReseniaPage from "../Pages/RestourantesPage/ReseniaPage"
export default function UnprotectedRoutes(){

    return <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Login" element={<Login onLogin={() => {}} />} />
        <Route path='/Info' element={<Info onInfo={() => {}} />} />
        <Route path="/restos" element={<RestorantesPage/>}/>
        <Route path="/restos/:nomResto" element={<ReseniaPage/>}/>
        <Route path='*' element={<Navigate to={'/'}/>} />
    </Routes>
}