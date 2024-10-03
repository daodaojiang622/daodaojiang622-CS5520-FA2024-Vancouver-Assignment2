import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dietEntries = [
  { id: '1', name: 'Breakfast: Oatmeal' },
  { id: '2', name: 'Lunch: Salad' },
  { id: '3', name: 'Dinner: Grilled Chicken' },
];

export default function DietScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dietEntries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
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