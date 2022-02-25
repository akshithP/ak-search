import React, { useState, useContext, createContext } from "react";

// useContext hook to fetch results from API and share it across
// the component tree.

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Async fetch to make API calls
  const getResults = async (resultType) => {
    setLoading(true);

    const response = await fetch(`${baseUrl}${resultType}`, {
      method: "GET",
      headers: {
       
      },
    });
  };
};
