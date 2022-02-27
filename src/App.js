import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";
import { HomePage } from "./components/HomePage";

import { useLocation } from "react-router-dom";

const App = () => {
  // Gives the URL
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-gray-200 black min-h-screen">
      {location.pathname !== "/home" ? <Navbar></Navbar> : <HomePage></HomePage>}
      {location.pathname !== "/home" ? <Routes/> : ''}
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
