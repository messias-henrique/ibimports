import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/sobre';
import Services from './pages/produtos';
import Contact from './pages/contato';
import SignUp from './pages/signup';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
       
      <Helmet>
        <title> IB IMPORTS </title>
      </Helmet>

    
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/sobre' element={<About/>} />
        <Route path='/produtos' element={<Services/>} />
        <Route path='/contato' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;