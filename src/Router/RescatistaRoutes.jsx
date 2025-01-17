import { Route, Routes } from "react-router-dom";
import UnprotectedRoutes from "./UnproctectedRoutes";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AccountPage from "../Pages/AccountPage/AccountPage";
import AsistenciaPage from "../Pages/AsistenciaPage/AsistenciaPage";

export default function RescatistaRoutes(){

    return <Routes>
        <Route path="/*" element={<UnprotectedRoutes />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/asist" element={<AsistenciaPage/>}/>
    </Routes>
}