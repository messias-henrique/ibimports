import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Sobre from './pages/sobre';
import Produtos from './pages/produtos';
import Contato from './pages/contato';
import SignUp from './pages/signup';
import Acessorios from './pages/acessorios';
import Eletronicos from './pages/eletronicos';
import Mascaras from './pages/mascaras';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
       
      <Helmet>s
        <title> IB IMPORTS </title>
      </Helmet>

    
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/produtos/acessorios' element={<Acessorios/>} />
        <Route path='/produtos/eletronicos' element={<Eletronicos/>} />
        <Route path='/produtos/mascaras' element={<Mascaras/>} />
      </Routes>
    </Router>
  );
}

export default App;