import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  Padding, ContainerStyle } from '../Utils/Style';
import { ThemeContext } from '../Components/ThemeContext';
import { DataContext } from '../Components/DataContext';
import DateInput from '../Components/DateInput';
import FormInput from '../Components/FormInput';
import AddScreenButtons from '../Components/AddScreenButtons';

export default function AddActivityScreen() {
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(null);
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const { updateData } = useContext(DataContext);

  const validateAndSave = () => {
    if (!description) {
      Alert.alert('Validation Error', 'Please enter a description.');
      return;
    }
    if (!calories || isNaN(calories) || parseFloat(calories) < 0) {
        Alert.alert('Validation Error', 'Please enter a valid calories (positive number or 0).');
        return;
      }
    if (!date) {
      Alert.alert('Validation Error', 'Please select a date.');
      return;
    }
  
    const newActivity = { 
        id: `d${Date.now()}`, 
        name: description, 
        date: date.toLocaleDateString('en-US', { weekday: 'short' }) + ' ' +
              date.toLocaleDateString('en-US', { month: 'short' }) + ' ' +
              date.toLocaleDateString('en-US', { day: '2-digit' }) + ' ' +
              date.getFullYear(),
        otherData: calories
    };

    updateData(newActivity);

    navigation.goBack();
  
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <FormInput label="Description" value={description} onChangeText={setDescription} theme={theme} inputStyle={styles.descriptionStyle} />
        <FormInput label="Calories" value={calories} onChangeText={setCalories} keyboardType="numeric" theme={theme} />
        <DateInput label="Date" date={date} setDate={setDate} theme={theme} />
        <AddScreenButtons onSave={validateAndSave} onCancel={() => navigation.goBack()} theme={theme} />     
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: ContainerStyle.flex,
    padding: Padding.xlarge,
  },
  descriptionStyle: {
    height: 100,
  },
});