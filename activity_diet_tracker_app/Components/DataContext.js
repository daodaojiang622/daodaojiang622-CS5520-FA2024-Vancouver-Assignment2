import React, { createContext, useState, useEffect } from 'react';
import { fetchDataFromDB } from '../Firebase/firestoreHelper';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const activities = await fetchDataFromDB('activities');
      const diets = await fetchDataFromDB('diets');
      setData([...activities, ...diets]);
    };

    fetchData();
  }, []);

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
