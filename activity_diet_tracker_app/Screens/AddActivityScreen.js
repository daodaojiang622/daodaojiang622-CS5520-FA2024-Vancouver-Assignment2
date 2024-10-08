import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import InputField from '../Components/InputField';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddActivityScreen() {
  const [activityType, setActivityType] = useState(null);
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Walking', value: 'walking' },
    { label: 'Running', value: 'running' },
    { label: 'Swimming', value: 'swimming' },
    { label: 'Weights', value: 'weights' },
    { label: 'Yoga', value: 'yoga' },
    { label: 'Cycling', value: 'cycling' },
    { label: 'Hiking', value: 'hiking' },
  ]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Activity *</Text>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select an activity"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
        />

      <Text style={styles.label}>Duration (min) *</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
        placeholder="Enter duration"
      />

        <Text style={styles.label}>Date *</Text>
        <TouchableOpacity onPress={showDatepicker}>
        <TextInput
          style={styles.input}
          value={`${date.toLocaleDateString('en-US', { weekday: 'short' })} ${date.toLocaleDateString('en-US', { month: 'short' })} ${date.toLocaleDateString('en-US', { day: '2-digit' })} ${date.getFullYear()}`}
          editable={false}
          placeholder="Select date"
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  dropdown: {
    marginBottom: 20,
    width: '100%',
  },
  dropdownContainer: {
    backgroundColor: '#fafafa',
  },
  label: {
        fontSize: 16,
        marginBottom: 8,
        color: 'blue',
  },
  input: {
    borderWidth: 1,
    borderColor: '#95a1c7',
    padding: 8,
    borderRadius: 4,
    borderWidth: 2,
    marginBottom: 20,
    width: '100%',
  },
});