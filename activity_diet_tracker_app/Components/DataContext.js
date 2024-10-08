import React, { createContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 'a1', name: 'Running', date: 'Mon 01 Oct 2023', otherData: '30 mins' },
    { id: 'a2', name: 'Swimming', date: 'Tue 02 Oct 2023', otherData: '45 mins' },
    { id: 'a3', name: 'Cycling', date: 'Mon 08 Oct 2023', otherData: '60 mins' },
    { id: 'a4', name: 'Weight Training', date: 'Tue 09 Oct 2023', otherData: '60 mins' },
    { id: 'a5', name: 'Weight Training', date: 'Tue 09 Oct 2023', otherData: '61 mins' },
    { id: 'a6', name: 'Running', date: 'Tue 09 Oct 2023', otherData: '61 mins' },
    { id: 'd1', name: 'Breakfast', date: 'Mon Oct 01 2023', otherData: '200' },
    { id: 'd2', name: 'Lunch', date: 'Mon Oct 08 2023', otherData: '300' },
    { id: 'd3', name: 'Dinner', date: 'Mon Oct 15 2023', otherData: '400' },
    { id: 'd4', name: 'Dinner', date: 'Mon Oct 15 2023', otherData: '800' },
    { id: 'd5', name: 'Dinner', date: 'Mon Oct 15 2023', otherData: '801' },
  ]);


  return (
    <View style={styles.dataProviderContainer}>
        <DataContext.Provider value={data}>
        {children}
        </DataContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
    dataProviderContainer: {
        flex: 1,
        backgroundColor: '#a6a6bf',
    },
});