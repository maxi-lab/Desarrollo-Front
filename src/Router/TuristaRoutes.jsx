import { Route, Routes } from "react-router-dom";
import UnprotectedRoutes from "./UnproctectedRoutes";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AccountPage from "../Pages/AccountPage/AccountPage";

export default function TuristaRoutes(){
    return <Routes>
        <Route path="/profile" element={<ProfilePage onProfilePage={()=>{}}/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/*" element={<UnprotectedRoutes/>}/>
    </Routes>
}