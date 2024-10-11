import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import Button from '../Components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Colors, BorderWidth, Padding, Font, BorderRadius, ContainerStyle, Width, Margin } from '../Utils/Style';
import { ThemeContext } from '../Components/ThemeContext';
import { DataContext } from '../Components/DataContext';
import DateInput from '../Components/DateInput';
import FormInput from '../Components/FormInput';
import AddScreenButtons from '../Components/addScreenButtons';

export default function AddActivityScreen() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const { data, updateData } = useContext(DataContext);

  const onChangeDate = (event, selectedDate) => {
    setDate(selectedDate); // Update the date state
  };

  const toggleDatePicker = () => {
    if (!showDatePicker && !date) {
      setDate(new Date()); // Set to current date if no date is selected
    }
    setShowDatePicker(!showDatePicker);
  }

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
        date: 
          date.toLocaleDateString('en-US', { weekday: 'short' }) + ' ' +
          date.toLocaleDateString('en-US', { month: 'short' }) + ' ' +
          date.toLocaleDateString('en-US', { day: '2-digit' }) + ' ' +
          date.getFullYear(),
        otherData: calories
    };

    updateData(newActivity);

    navigation.goBack();
  
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <FormInput label="Description" value={description} onChangeText={setDescription} theme={theme} inputStyle={styles.descriptionStyle} />
      <FormInput label="Calories" value={calories} onChangeText={setCalories} keyboardType="numeric" theme={theme} />
      <DateInput label="Date" date={date} setDate={setDate} theme={theme} />
      <AddScreenButtons onSave={validateAndSave} onCancel={() => navigation.goBack()} theme={theme} />     
    </View>
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