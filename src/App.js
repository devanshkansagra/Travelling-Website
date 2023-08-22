import './App.css'
import FPassword from './components/FPassword';
import Flight from './components/Flight';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';

import { Routes, Route } from 'react-router-dom'
import Train from './components/Train';
import Hotel from './components/Hotel';
import Bus from './components/Bus';


function App() {
  return (
    <>
      <Navbar />
      {/* <Flight /> */}
      <Routes>
        <Route path="/" element={<Flight/>}></Route>
        <Route path="/train" element={<Train/>}></Route>
        <Route path="/hotel" element={<Hotel/>}></Route>
        <Route path="/bus" element={<Bus/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/fpasswd" element={<FPassword/>}></Route>
      </Routes>
    </>
  );
}

export default App;
