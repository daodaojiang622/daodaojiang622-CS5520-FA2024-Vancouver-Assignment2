import React, { createContext, useState, useEffect } from 'react';
import { fetchDataFromDB } from '../Firebase/firestoreHelper';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const [data, setData] = useState([
  //   { id: 'a1', name: 'Walking', date: 'Mon Jun 28 2021', otherData: '30 min' },
  //   { id: 'a2', name: 'Running', date: 'Tue Jun 29 2021', otherData: '45 min' },
  //   { id: 'a3', name: 'Swimming', date: 'Wed Jun 30 2021', otherData: '61 min' },
  //   { id: 'a4', name: 'Running', date: 'Tue Jun 29 2021', otherData: '61 min' },
  //   { id: 'a5', name: 'Weight Training', date: 'Tue Jun 29 2021', otherData: '90 min' },
  //   { id: 'd1', name: 'Salad', date: 'Mon Jun 28 2021', otherData: '200' },
  //   { id: 'd2', name: 'Steak', date: 'Tue Jun 29 2021', otherData: '500' },
  //   { id: 'd3', name: 'Ice Cream', date: 'Wed Jun 30 2021', otherData: '300' },
  //   { id: 'd4', name: 'Dinner', date: 'Wed Jun 30 2021', otherData: '801' },
  // ]);
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
