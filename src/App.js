import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import UserCard from './Pages/BMC/UserCard'
import ProductShare from './Pages/SharePage/ProductShare'
import ServiceShare from './Pages/SharePage/ServiceShare'
import Terms from './Pages/Terms'
import Policy from './Pages/Policy'
import Contact from './Pages/HomeContent/Contact'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BMC/usercard/:id" element={<UserCard />} />
        <Route path="/product/:id" element={<ProductShare />} />
        <Route path="/service/:id" element={<ServiceShare />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
