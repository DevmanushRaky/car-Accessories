import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Faq from "../pages/faq/Faq"
import Hood from '../pages/products/hoodcover/HoodCover';
import CarShelter from '../pages/products/carshelter/CarShelter';
import BikeShelter from '../pages/products/bikeshelter/BikeShelter';
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
      <Route path="/hood" element={<Hood />} />
      <Route path="/carshelter" element={<CarShelter />} />
      <Route path="/bikeshelter" element={<BikeShelter />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
   

    </Routes>

  );
};

export default Routers;
