import React from 'react';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const TabBarIcon = ({ routeName }) => {
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

  return <IconComponent name={iconName} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: 'black',
  },
});

export default TabBarIcon;