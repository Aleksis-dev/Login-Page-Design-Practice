import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Register from './Routes/Register';
import ResetPassword from './Routes/ResetPassword';

function Router() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/resetpassword" element={<ResetPassword />}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default Router;