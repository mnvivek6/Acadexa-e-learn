import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import UserRoute from './Routes/users';
import AdminRoute from './Routes/admin'
import TutorRoute from './Routes/tutor';
import Login from './Pages/clients/Login';
import { useAppSelector } from './Redux/hooks';
import Register from './Components/client/Register';



type routes={}
const App:React.FC<routes>=()=>{

  const IsAuth = useAppSelector(state=>state.user.accessToken)
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/*' element={IsAuth?<UserRoute/>:<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/admin/*' element={<AdminRoute/>} />
        <Route path='/tutor/*' element={<TutorRoute/>}/>
        
        <Route/>
        </Routes>
      </Router>
    </div>
  );

}

 


export default App;
