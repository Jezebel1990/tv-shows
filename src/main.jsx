import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Sitcom from './pages/Sitcom.jsx';
import Search from './pages/Search.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<App />}>
     <Route path='/' element={<Home />}>
     <Route path='serie/:id' element={<Sitcom/>}>
      <Route path='search' element={<Search />} />
     </Route>
     </Route>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
