import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import Button from '../Components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Colors, BorderWidth, Padding, FontSize, BorderRadius, ContainerStyle, Width, Margin } from '../Utils/Style';
import { ThemeContext } from '../Components/ThemeContext';
import { DataContext } from '../Components/DataContext';

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
        <Text style={[styles.label, { color: theme.headerColor}]}>Description *</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={description}
        onChangeText={setDescription}
      />
      <Text style={[styles.label, { color: theme.headerColor}]}>Calories *</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
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
    flex: ContainerStyle.flex,
    padding: Padding.large,
  },
  dropdown: {
    marginBottom: Margin.large,
    width: Width.large,
  },
  label: {
    fontSize: FontSize.medium,
    marginBottom: Margin.small,
    color: Colors.primary,
  },
  input: {
    borderWidth: BorderWidth.thin,
    borderColor: Colors.inputBorder,
    padding: 8,
    borderRadius: BorderRadius.small,
    marginBottom: Margin.large,
    width: Width.large,
  },
  addActivityButton: {
    backgroundColor: Colors.noColor,
    padding: Padding.medium,
    borderRadius: BorderRadius.small,
    marginRight: Margin.xlarge,
    width: Width.small,
  },
  addActivityButtonText: {
    color: Colors.primary,
    fontSize: FontSize.medium,
  },
  buttonContainer: {
    flexDirection: ContainerStyle.flexDirection,
    justifyContent: ContainerStyle.justifyContent,
    marginTop: Margin.xxxxlarge,
    marginLeft: Margin.xxlarge,
  },
});