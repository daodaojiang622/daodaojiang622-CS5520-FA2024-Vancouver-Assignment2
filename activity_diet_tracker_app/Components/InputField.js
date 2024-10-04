import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '../Utils/Colors';

export default function InputField({ label, value, onChangeText, placeholder, keyboardType = 'default' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 46,
    marginBottom: 16,
    width: '80%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: Colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: '#95a1c7',
    padding: 8,
    borderRadius: 4,
    borderWidth: 2,
  },
});