import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-700">
      <div className="flex justfiy-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-red-700 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            PathFinder🔎
          </p>
        </Link>
      </div>
      <Search/>
    </div>
  );
};
