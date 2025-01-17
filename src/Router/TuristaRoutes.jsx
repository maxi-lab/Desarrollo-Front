import { Route, Routes } from "react-router-dom";
import UnprotectedRoutes from "./UnproctectedRoutes";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AccountPage from "../Pages/AccountPage/AccountPage";
import AsistenciaPage from "../Pages/AsistenciaPage/AsistenciaPage";

export default function TuristaRoutes(){
    return <Routes>
        <Route path="/profile" element={<ProfilePage onProfilePage={()=>{}}/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/asist" element={<AsistenciaPage/>}/>
        <Route path="/*" element={<UnprotectedRoutes/>}/>
    </Routes>
}