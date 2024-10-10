import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DataContext } from './DataContext';
import Colors from '../Utils/Style';
import { ThemeContext } from './ThemeContext';
import SpecialIndicator from './SpecialIndicator';

const ItemsList = ({ type }) => {
  const { data } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);

  console.log('ItemsList data:', data);
    // Filter data based on the type prop
    const filteredData = data.filter(item => {
      if (type === 'activity') {
        return item.id.startsWith('a');
      } else if (type === 'diet') {
        return item.id.startsWith('d');
      }
      return false;
    });

  const renderItem = ({ item }) => {

    return (
    <View style={[styles.activityContainer, {backgroundColor: theme.headerColor}]}>
      <Text style={styles.name}>{item.name}</Text>

      {(item.name === 'Running' || item.name === 'Weight Training') && parseInt(item.otherData) > 60 && (
          <SpecialIndicator />
        )}
      {item.id.startsWith('d') && parseInt(item.otherData) > 800 && (
          <SpecialIndicator />
      )}

      <View style={styles.dataContainer}>
        <Text style={styles.data}>{item.date}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{item.otherData}</Text>
      </View>
    </View>
  );} 

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
    backgroundColor: Colors.primary,
    borderRadius: 5,
    width: '85%',
    alignSelf: 'center',
    marginTop: 15,
  },
  name: {
    flex: 1,
    textAlign: 'left',
    color: Colors.tertiary,
    fontWeight: 'bold',
  },
  data: {
    textAlign: 'center',
  },
  dataContainer: {
    backgroundColor: Colors.tertiary,
    borderRadius: 5,
    padding: 5,
    width: 'auto',
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  special: {
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 5,
  },
});

export default ItemsList;