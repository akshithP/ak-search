import React, { useEffect, useState } from "react";

import { useResultContext } from "../Context/ResultContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('')

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={() => setSearchTerm(text)}>🔍</button>
      <Links />
    </div>
  );
};
