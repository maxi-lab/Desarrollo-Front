import { Route, Routes } from "react-router-dom";
import UnprotectedRoutes from "./UnproctectedRoutes";

export default function TuristaRoutes(){
    return <Routes>
        <Route path="/*" element={<UnprotectedRoutes/>}/>
    </Routes>
}