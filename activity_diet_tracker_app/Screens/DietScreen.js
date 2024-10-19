import React from 'react';
import ItemsList from '../Components/ItemsList';

export default function DietScreen() {
  return (
    <ItemsList data={dietEntries} />
  );
}