import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import UserRoute from './Routes/users';
import AdminRoute from './Routes/admin'
import TutorRoute from './Routes/tutor';



type routes={}
const App:React.FC<routes>=()=>{

  return (
    <div>
      <Router>
        <Routes>
        <Route path='/*' element={<UserRoute/>}/>
        <Route path='/admin/*' element={<AdminRoute/>} />
        <Route path='/tutor/*' element={<TutorRoute/>}/>
        
        <Route/>
        </Routes>
      </Router>
    </div>
  );

}

 


export default App;
