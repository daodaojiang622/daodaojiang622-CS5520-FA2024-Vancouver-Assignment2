import React from 'react';
import { StyleSheet } from 'react-native';
import ItemsList from '../Components/ItemsList';

export default function DietScreen() {
  return (
    <ItemsList data={dietEntries} />
  );
}