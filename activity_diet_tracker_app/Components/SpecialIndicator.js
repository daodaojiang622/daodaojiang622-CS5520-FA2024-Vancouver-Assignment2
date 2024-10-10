import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, FontSize } from '../Utils/Style';

const SpecialIndicator = () => {
  return <Text style={styles.special}>{'!'}</Text>;
};

const styles = StyleSheet.create({
  special: {
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: FontSize.large,
    marginRight: 5,
  },
});

export default SpecialIndicator;