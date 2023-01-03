import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/layout/page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Cards from './components/layout/Cards';
import BodySection from './components/layout/BodySection';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <BodySection />
        <Cards/>
        <Footer/>
        <Routes>

          <Route path='/' exact component={Home} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;