import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

// Custom Hook to use Loading Context
export const useLoading = () => {
  return useContext(LoadingContext);
}

// Loading Provider

export const LoadingProvider = ({ children }) => {
  
  const [loading, setLoading] = useState(false);

  // Function to show the spinner
  const startLoading = () => setLoading(true);

  // Function to hide the spinner
  const stopLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>{ children }</LoadingContext.Provider>
  )
}