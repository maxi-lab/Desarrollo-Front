import { Route, Routes } from "react-router-dom";
import UnprotectedRoutes from "./UnproctectedRoutes";

export default function RescatistaRoutes(){

    return <Routes>
        <Route path="/*" element={<UnprotectedRoutes/>}/>
    </Routes>
}