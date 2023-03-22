import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/id';
import IndexGuests from './components/IndexGuests.js';
import Dashboard from './components/Dashboard.js';
import DashboardBukuTamu from './components/DashboardBukuTamu.js';
import axios from 'axios';
import Login from './components/Login.js';

function App() {
  moment.locale('id')
  axios.defaults.withCredentials = true
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexGuests/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/bukutamu' element={<DashboardBukuTamu/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
