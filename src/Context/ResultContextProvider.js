import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useContext, createContext } from "react";

// useContext hook to fetch results from API and share it across
// the component tree.

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Ronaldo");

  // Async fetch to make API calls
  const getResults = async (resultType) => {
    setLoading(true);

    const response = await fetch(`${baseUrl}${resultType}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      },
    });

    const data = await response.json();

    if (resultType.includes("/news")) {
      setResults(data.entries);
    } else if (resultType.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }

    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

// Makes it easier to use values from this context by exporting the function
export const useResultContext = () => useContext(ResultContext);
