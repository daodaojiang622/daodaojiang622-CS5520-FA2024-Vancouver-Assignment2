import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Padding, Font, BorderRadius, Margin, ContainerStyle } from '../Utils/Style';

const Button = ({ onPress, title, textStyle, buttonStyle }) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>

      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.noColor,
    padding: Padding.large,
    borderRadius: BorderRadius.small,
    alignItems: ContainerStyle.alignItems,
  },
  buttonText: {
    color: Colors.tertiary,
    fontSize: Font.sizeMedium,
    marginRight: Margin.xlarge,
    fontWeight: Font.weight,
  },
});

export default Button;