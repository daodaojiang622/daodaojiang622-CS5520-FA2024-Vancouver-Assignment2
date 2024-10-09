import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';

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
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.tertiary,
    fontSize: 16,
    marginRight: 25,
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 25,
    height: 25,
    marginRight: 25,
  },
});

export default Button;