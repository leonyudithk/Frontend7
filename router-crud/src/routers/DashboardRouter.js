import { Navbar } from 'react-bootstrap';
import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Employees } from '../components/CRUDempleados/Employees';

export const DashboardRouter =()=>{
    return(
        <div>
        <Navbar>
        <Routes>
         <Route path="/" element={<Employees/>} />
         <Route path='*' element={<Navigate to="/" />} />
                  
        </Routes>
        </Navbar>
       
    </div>
    )
}