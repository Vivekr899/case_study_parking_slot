import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



import Home from './components/Home';
import Register from './components/Register';
import Booking from './components/Booking';
import Header from './components/Navbar';
import AddSlots from './components/AddSlots';
import BookedSlots from './components/BookedSlots';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import ViewSlots from './components/ViewSlots';



function App() {
  
 
 
  return (
    <div>
   <Router>
     <ToastContainer/>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="addslot" element={<AddSlots/>} />
        <Route path="viewslot" element={<BookedSlots/>} />
        <Route path="login" element={<Login/>} />
        <Route path="view" element={<ViewSlots/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
