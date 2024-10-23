import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Button, Icon } from '../Utils/Style';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon.deleteIconComponent name={Icon.deleteIconName} style={styles.DeleteButton} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  DeleteButton: {
    color: Colors.tertiary,
    fontSize: Button.size,
  },
});

export default DeleteButton;