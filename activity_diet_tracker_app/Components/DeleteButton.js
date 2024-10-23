import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const DeleteButton = ({ onPress, color = 'white', size = 20 }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome5 name="trash-alt" size={size} color={color} />
    </TouchableOpacity>
  );
};

export default DeleteButton;