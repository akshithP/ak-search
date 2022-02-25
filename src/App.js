import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";

const App = () => {

  return (
      <div className="bg-gray-900 text-gray-200 black min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </div>
  );
};

export default App;
