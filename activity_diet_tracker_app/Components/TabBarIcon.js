import React from 'react';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Font } from '../Utils/Style';

const TabBarIcon = ({ routeName, iconStyle }) => {
  let iconName;
  let IconComponent;

  if (routeName === 'Activities') {
    IconComponent = FontAwesome5;
    iconName = 'running';
  } else if (routeName === 'Diet') {
    IconComponent = MaterialIcons;
    iconName = 'fastfood';
  } else if (routeName === 'Settings') {
    IconComponent = Ionicons;
    iconName = 'settings-sharp';
  }

  return <IconComponent name={iconName} style={[styles.icon, iconStyle]} />;
};

const styles = StyleSheet.create({
  icon: {
    fontSize: Font.SizeLarge,
  },
});

export default TabBarIcon;