import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Function to update data
  const updateData = (newData) => {

    setData(prevData => {
      console.log('Previous data:', prevData);
      return [...prevData, newData]});
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
    {children}
    </DataContext.Provider>
  );
};
