import './App.css'
import FPassword from './components/FPassword';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/fpasswd" element={<FPassword/>}></Route>
      </Routes>
    </>
  );
}

export default App;
