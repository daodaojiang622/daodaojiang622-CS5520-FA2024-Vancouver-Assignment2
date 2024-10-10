import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DataContext } from './DataContext';
import { Colors, Padding, Font, BorderRadius, ContainerStyle, Width, Margin } from '../Utils/Style';
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
    flexDirection: ContainerStyle.flexDirection,
    justifyContent: ContainerStyle.justifyContent,
    padding: Padding.large,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.small,
    width: Width.medium,
    alignSelf: 'center',
    marginTop: Margin.medium,
  },
  name: {
    flex: ContainerStyle.flex,
    textAlign: 'left',
    color: Colors.tertiary,
    fontWeight: Font.weight,
  },
  data: {
    textAlign: 'center',
  },
  dataContainer: {
    backgroundColor: Colors.tertiary,
    borderRadius: BorderRadius.small,
    padding: Padding.small,
    width: 'auto',
    marginHorizontal: Margin.xsmall,
    paddingHorizontal: Padding.large,
  },
  special: {
    color: Colors.secondary,
    fontWeight: Font.weight,
    fontSize: Font.sizeLarge,
    marginRight: Margin.xsmall,
  },
});

export default ItemsList;