import { View, Text } from 'react-native'
import React from 'react'
import InputField from '../Components/InputField'

export default function AddAnActivityScreen() {
  return (
    <View>
        <InputField label="Activity *" />
        <InputField label="Duration (min) *" />
        <InputField label="Date *" />
    </View>
  )
}