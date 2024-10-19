import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Colors, Padding, Font, BorderRadius, Margin, ContainerStyle } from '../Utils/Style';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons/FontAwesome6';

const Button = ({ onPress, title, textStyle, buttonStyle, imageSource }) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    {FirstIconComponent && SecondIconComponent ? (
      <View style={styles.iconContainer}>
        <FirstIconComponent name={firstIconName} style={styles.buttonIcon} />
        <SecondIconComponent name={secondIconName} style={styles.buttonIcon} />
      </View>
    ) : (
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    )}
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
  buttonImage: {
    width: Image.width,
    height: Image.height,
    marginRight: Margin.xlarge,
  },
});

export default Button;