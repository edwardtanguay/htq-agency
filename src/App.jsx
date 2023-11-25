import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Cooperation from './pages/Cooperation';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
 <Router>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
