import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from "../Pages/AdminPage/AdminPage"
import UnprotectedRoutes from './UnproctectedRoutes';
export default function AdminRoutes(){

    return <Routes>
        <Route path='/*' element={<UnprotectedRoutes/>}/>
        <Route path='/AdminPage' element={<AdminPage onAdminPage={() => {}} />} />

    </Routes>
}