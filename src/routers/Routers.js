import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Faq from "../pages/faq/Faq"
import Products from '../pages/products/Products';
import Contact from '../pages/contact/Contact';
import ErrorPage from "../pages/errorpage/Error"


const Routers = () => {
  return (

    <Routes>
      {/* Normal pages */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
   

    </Routes>

  );
};

export default Routers;
