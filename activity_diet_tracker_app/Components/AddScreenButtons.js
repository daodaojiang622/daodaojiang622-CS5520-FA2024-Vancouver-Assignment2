import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import { Colors, Padding, Font, BorderRadius, ContainerStyle, Width, Margin, Position } from '../Utils/Style';

export default function AddScreenButtons({ onSave, onCancel, theme }) {
  return (
    <View style={styles.buttonContainer}>
      <Button 
        title="Save" 
        onPress={onSave}
        buttonStyle={styles.button}
        textStyle={[styles.buttonText, { color: theme.headerColor }]}
      />
      <Button 
        title="Cancel" 
        onPress={onCancel}
        buttonStyle={styles.button}
        textStyle={[styles.buttonText, { color: theme.headerColor }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: Colors.noColor,
        padding: Padding.large,
        borderRadius: BorderRadius.small,
        marginRight: Margin.xlarge,
        width: Width.small,
    },
    ButtonText: {
        color: Colors.primary,
        fontSize: Font.sizeMedium,
    },
    buttonContainer: {
        flexDirection: ContainerStyle.flexDirection,
        justifyContent: ContainerStyle.justifyContent,
        marginTop: Margin.xxxxxlarge,
        marginLeft: Margin.xxxlarge,
        position: Position.absolute,
    },
});
