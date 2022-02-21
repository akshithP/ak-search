import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";

const App = () => {
  // Option to set dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
