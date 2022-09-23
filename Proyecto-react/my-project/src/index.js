import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact'
import Search from './pages/Search';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './index.css';
import Layout from './component/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Search" element={<Search />} />
    <Route path="/Signin" element={<Signin />} />
    <Route path="/Signup" element={<Signup />} />
    </Routes>
    </Layout>
    </BrowserRouter>
  </React.StrictMode>

);