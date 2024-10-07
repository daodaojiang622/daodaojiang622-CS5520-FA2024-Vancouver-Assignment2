import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const activities = [
  { id: '1', name: 'Running', date: 'Mon Oct 01 2023', duration: '30 mins' },
  { id: '2', name: 'Swimming', date: '2023-10-02', duration: '45 mins' },
  { id: '3', name: 'Cycling', date: '2023-10-03', duration: '60 mins' },
];

const ActivityItem = ({ name, date, duration }) => (
  <View style={styles.activityContainer}>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.dateContainer}>
      <Text style={styles.date}>{date}</Text>
    </View>  
    <View style={styles.durationContainer}>
      <Text style={styles.duration}>{duration}</Text>
    </View>
  </View>
);

const ActivitiesScreen = () => {
  return (
    <FlatList
      data={activities}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ActivityItem name={item.name} date={item.date} duration={item.duration} />
      )}
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
  duration: {
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
  durationContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: 'auto',
    paddingHorizontal: 10,
  },
});

export default ActivitiesScreen;