import React, { useState } from 'react';
import './App.css'
import { 
  BrowserRouter,
  Routes,
  Route, } from 'react-router-dom';
import FarmerIndex from './components/FarmersPage/FarmerIndex';
import LandingIndex from './components/LandingPage/LandingIndex';
import Login from './components/OfftakerPage/Login/Login';
import Dashboard from './components/OfftakerPage/Dashboard/Dashboard';
import Clients from './components/OfftakerPage/Clients/Clients';
import Products from './components/OfftakerPage/Products/Products';
import Payment from './components/OfftakerPage/Payments/Payment';
import FarmerRegistration from './components/OfftakerPage/FarmerRegistration/FarmerRegistration';


function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingIndex />} />
        <Route path='/farmers' element={<FarmerIndex />} />
        <Route path='/offtaker-login' element={<Login />} />
        <Route path='/offtaker-dashboard' element={<Dashboard />} />
        <Route path='/offtaker-clients' element={<Clients />} />
        <Route path='/offtaker-products' element={<Products />} />
        <Route path='/offtaker-payments' element={<Payment />} />
        <Route path='/farmer-registration' element={<FarmerRegistration />} />


        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
