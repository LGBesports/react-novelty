import React from 'react';
import './App.scss';
import './_nullstyle.scss'
import Header from './comps/Header/Header'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './comps/Footer/Footer';
import About from './pages/about/About';
import Offer from './pages/offer/Offer';
import Contacts from './pages/contacts/Contacts';
function App() {
  
  return (
    
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route 
          path='/'
          element ={
            <Home />
          }
          />
          <Route 
          path='/about'
          element ={
            <About />
          }
          />
          <Route 
          path='/offer'
          element ={
            <Offer />
          }
          />
          <Route 
          path='/contacts'
          element ={
            <Contacts />
          }
          />
            
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
