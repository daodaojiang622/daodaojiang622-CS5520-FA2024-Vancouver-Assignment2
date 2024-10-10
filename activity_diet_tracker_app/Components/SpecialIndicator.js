import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../Utils/Style';

const SpecialIndicator = () => {
  return <Text style={styles.special}>{'!'}</Text>;
};

const styles = StyleSheet.create({
  special: {
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 5,
  },
});

export default SpecialIndicator;