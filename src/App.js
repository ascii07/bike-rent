// src/App.js or src/Pages/Home.jsx

import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css'; // Make sure to import global styles
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Termsandcondition from './Pages/Termsandcondition';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Home />
      <Routes>
        {/* <Route path="/Termsandcondition" element ={<Termsandcondition/>}></Route> */}
      </Routes>
      <Footer />
      
    </div>
    </Router>
  );
};

export default App;
