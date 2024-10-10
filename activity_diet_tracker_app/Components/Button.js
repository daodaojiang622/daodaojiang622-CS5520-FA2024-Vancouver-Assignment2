import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Colors, Padding, FontSize, BorderRadius, Margin, ContainerStyle } from '../Utils/Style';

const Button = ({ onPress, title, textStyle, buttonStyle, imageSource, imageStyle }) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    {imageSource ? (
      <Image source={imageSource} style={[styles.buttonImage]} />
    ) : (
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.noColor,
    padding: Padding.medium,
    borderRadius: BorderRadius.small,
    alignItems: ContainerStyle.alignItems,
  },
  buttonText: {
    color: Colors.tertiary,
    fontSize: FontSize.medium,
    marginRight: Margin.xlarge,
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 25,
    height: 25,
    marginRight: Margin.xlarge,
  },
});

export default Button;