import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from "../Pages/AdminPage/AdminPage"
import UnprotectedRoutes from './UnproctectedRoutes';
import AccountPage from '../Pages/AccountPage/AccountPage';
export default function AdminRoutes(){

    return <Routes>
        <Route path='/*' element={<UnprotectedRoutes/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path='/AdminPage' element={<AdminPage onAdminPage={() => {}} />} />
    </Routes>
}