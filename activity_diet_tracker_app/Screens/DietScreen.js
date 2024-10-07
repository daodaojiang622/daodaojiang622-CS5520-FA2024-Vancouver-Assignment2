import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ItemsList from '../Components/ItemsList';

const dietEntries = [
  { id: '1', name: 'Breakfast', date: 'Mon Oct 01 2023', otherData: '200' },
  { id: '2', name: 'Lunch', date: 'Mon Oct 08 2023', otherData: '300' },
  { id: '3', name: 'Dinner', date: 'Mon Oct 15 2023', otherData: '400' },
];

export default function DietScreen() {
  return (
    <ItemsList data={dietEntries} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});