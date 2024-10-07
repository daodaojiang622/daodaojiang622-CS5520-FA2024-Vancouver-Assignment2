import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ItemsList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.activityContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.otherDataContainer}>
        <Text style={styles.otherData}>{item.otherData}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
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
  date: {
    flex: 1,
    textAlign: 'center',
  },
  otherData: {
    flex: 1,
    textAlign: 'right',
  },
  dateContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: 'auto',
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  otherDataContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: 'auto',
    paddingHorizontal: 10,
  },
});

export default ItemsList;
