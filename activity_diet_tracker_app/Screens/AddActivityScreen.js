import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../Components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';
import { ThemeContext } from '../Components/ThemeContext';
import { DataContext } from '../Components/DataContext';

export default function AddActivityScreen() {
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const { data, updateData } = useContext(DataContext);
  
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Walking', value: 'walking' },
    { label: 'Running', value: 'running' },
    { label: 'Swimming', value: 'swimming' },
    { label: 'Weight Training', value: 'Weight Training' },
    { label: 'Yoga', value: 'yoga' },
    { label: 'Cycling', value: 'cycling' },
    { label: 'Hiking', value: 'hiking' },
  ]);


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

    if (!value) {
      Alert.alert('Validation Error', 'Please select an activity.');
      return;
    }
    if (!duration || isNaN(duration) || parseFloat(duration) <= 0) {
      Alert.alert('Validation Error', 'Please enter a valid duration (positive number).');
      return;
    }
    if (!date) {
      Alert.alert('Validation Error', 'Please select a date.');
      return;
    }
    // Create the new activity object
    const newActivity = {
      id: `a${Date.now()}`, // Generate a unique ID
      name: value,
      date: date.toLocaleDateString('en-US', { weekday: 'short' }) + ' ' +
            date.toLocaleDateString('en-US', { month: 'short' }) + ' ' +
            date.toLocaleDateString('en-US', { day: '2-digit' }) + ' ' +
            date.getFullYear(),
      otherData: `${duration} min`
    };
  
    // Update the data state with the new activity
    updateData(newActivity);

    navigation.goBack();
  
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.label, { color: theme.headerColor}]}>Activity *</Text>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select an activity"
            style={[styles.dropdown, {backgroundColor: theme.backgroundColor}]}
            dropDownContainerStyle={[styles.dropdownContainer, {backgroundColor: theme.backgroundColor}]}
            maxHeight={400}
        />
      <Text style={[styles.label, { color: theme.headerColor}]}>Duration (min) *</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
        placeholder="Enter duration"
      />

        <Text style={[styles.label, { color: theme.headerColor}]}>Date *</Text>
        <TextInput
          style={styles.input}
          value={date ? `${date.toLocaleDateString('en-US', { weekday: 'short' })} ${date.toLocaleDateString('en-US', { month: 'short' })} ${date.toLocaleDateString('en-US', { day: '2-digit' })} ${date.getFullYear()}` : ''}
          editable={false}
          placeholder="Select date"
          onChangeText={setDate}
          onPress={toggleDatePicker}
        />
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="inline"
          onChange={onChangeDate}
        />
      )}
      

      <View style={styles.buttonContainer}>
        <Button 
          title="Save" 
          onPress={() => validateAndSave()}
          buttonStyle={styles.addActivityButton}
          textStyle={[styles.addActivityButtonText, { color: theme.headerColor}]}
        />
        <Button 
          title="Cancel" 
          onPress={() => navigation.goBack()}
          buttonStyle={styles.addActivityButton}
          textStyle={[styles.addActivityButtonText, { color: theme.headerColor}]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  dropdown: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: Colors.background,
  },
  dropdownContainer: {
    backgroundColor: Colors.background,
  },
  label: {
        fontSize: 16,
        marginBottom: 8,
        color: Colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    padding: 8,
    borderRadius: 4,
    marginBottom: 20,
    width: '100%',
  },
  addActivityButton: {
    backgroundColor: Colors.noColor,
    padding: 10,
    borderRadius: 5,
    marginRight: 25,
    width: '35%',
  },
  addActivityButtonText: {
    color: Colors.primary,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 300,
    marginLeft: 30,
  },
});