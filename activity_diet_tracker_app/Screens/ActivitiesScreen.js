import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const activities = [
  { id: '1', name: 'Running' },
  { id: '2', name: 'Swimming' },
  { id: '3', name: 'Cycling' },
];

export default function ActivitiesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
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