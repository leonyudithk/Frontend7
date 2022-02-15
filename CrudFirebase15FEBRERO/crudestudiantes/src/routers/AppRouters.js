import React from 'react';
import {
    BrowserRouter,
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Estudiantes from '../components/Estudiantes';
const AppRouters = () => {
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path="/" element={<Estudiantes/>} />
               
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;





