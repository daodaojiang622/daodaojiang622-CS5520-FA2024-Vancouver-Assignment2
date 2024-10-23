import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors, Button } from '../Utils/Style';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome5 name="trash-alt" style={styles.DeleteButton} />
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