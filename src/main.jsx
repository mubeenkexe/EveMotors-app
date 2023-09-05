import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx'
import Register from './Register.jsx'
import Home from './Home.jsx'
import FormDashboard from './Dashboard.jsx';
import './index.css'
import AddACar from './AddACar.jsx';
import Supra from './Supra.jsx';
import GTR from './NissanGTR.jsx';
import Mustang from './FordMustang.jsx';
import Carlisting from './Carlisting.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />


        <Route path="/dashboard" element={<FormDashboard />} />
        <Route path="/addacar" element={<AddACar />} />
        <Route path="/carlisting" element={<Carlisting />} />


        <Route path="/car/supra-mk4" element={<Supra />} />
        <Route path="/car/nissan-gtr" element={<GTR />} />
        <Route path="/car/ford-mustang" element={<Mustang />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
