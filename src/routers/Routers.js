import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Faq from "../pages/faq/Faq"
import Contact from '../pages/contact/Contact';
import ErrorPage from "../pages/errorpage/Error"
import Hood from '../pages/products/hoodcover/HoodCover';
import CarShelters from '../pages/products/carshelter/CarShelter';
import CarProduct from '../pages/products/carshelter/CarProduct';
import BikeShelters from '../pages/products/bikeshelter/BikeShelters';
import BikeProduct from '../pages/products/bikeshelter/BikeProduct';
import HoodProduct from '../pages/products/hoodcover/HoodProduct';


const Routers = () => {
  return (

    <Routes>
      {/* Normal pages */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hoods" element={<Hood />} />
      <Route path="/hoodproduct/:jeepsyHId" element={<HoodProduct />} />
      <Route path="/carshelters" element={<CarShelters />} />
      <Route path="/carproduct/:carshelterId" element={<CarProduct />} />
      <Route path="/bikeshelters" element={<BikeShelters />} />
      <Route path="/bikeproduct/:bikeshelterId" element={<BikeProduct />} />
      <Route path="*" element={<ErrorPage />} />


    </Routes>

  );
};

export default Routers;
