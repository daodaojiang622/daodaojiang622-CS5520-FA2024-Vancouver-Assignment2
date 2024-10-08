import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DataContext } from './DataContext';
import { Ionicons } from '@expo/vector-icons';

const ItemsList = ({ type }) => {
  const data = useContext(DataContext);

    // Filter data based on the type prop
    const filteredData = data.filter(item => {
      if (type === 'activity') {
        return item.id.startsWith('a');
      } else if (type === 'diet') {
        return item.id.startsWith('d');
      }
      return false;
    });

  const renderItem = ({ item }) => (
    <View style={styles.activityContainer}>
      <Text style={styles.name}>{item.name}</Text>

      {(item.name === 'Running' || item.name === 'Weight Training') && parseInt(item.otherData) > 60 && (
          <Ionicons name="alert-circle-outline" size={24} color="orange" />
        )}

      <View style={styles.dataContainer}>
        <Text style={styles.data}>{item.date}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{item.otherData}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#454580',
    borderRadius: 5,
    width: '85%',
    alignSelf: 'center',
    marginTop: 15,
  },
  name: {
    flex: 1,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },
  data: {
    flex: 1,
    textAlign: 'center',
  },
  dataContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: 'auto',
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
});

export default ItemsList;