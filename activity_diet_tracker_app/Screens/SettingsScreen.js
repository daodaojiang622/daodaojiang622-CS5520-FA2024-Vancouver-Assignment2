import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Button from '../Components/Button';

export default function ActivitiesScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Toggle Theme"
        textStyle={styles.themeButtonText}
        buttonStyle={styles.themeButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  themeButtonText: {
    color: 'black',
  },
  themeButton: {
    marginTop: 250,
  },
});