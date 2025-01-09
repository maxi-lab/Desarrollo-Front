
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import AdminRoutes from "./AdminRoutes"
import UnprotectedRoutes from "./UnproctectedRoutes"
import RescatistaRoutes from "./RescatistaRoutes"
import TuristaRoutes from "./TuristaRoutes"
export default function AppRouter() {
    const {user}=useContext(UserContext)
    const roles=()=>{
        const rolMap=new Map()
        rolMap.set("Admin",<Route path="/*" element={<AdminRoutes/>}/>)
        rolMap.set("Rescatista",<Route path="/*" element={<RescatistaRoutes/>}/>)
        rolMap.set("Turista",<Route path="/*" element={<TuristaRoutes/>}/>)
        rolMap.set("",<Route path="/*" element={<UnprotectedRoutes/>}/>)
        return rolMap.get(user.rol)
    }
    return <BrowserRouter>
        <Routes>
            {roles()}
            <Route path='/*' element={<Navigate to={'/'}/>} />
        </Routes>
    </BrowserRouter>
}