import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, FontSize, Margin } from '../Utils/Style';

const SpecialIndicator = () => {
  return <Text style={styles.special}>{'!'}</Text>;
};

const styles = StyleSheet.create({
  special: {
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: FontSize.large,
    marginRight: Margin.xsmall,
  },
});

export default SpecialIndicator;