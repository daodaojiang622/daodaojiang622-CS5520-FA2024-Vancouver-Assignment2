import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from '../Components/Button';
import { Colors, Padding, FontSize, BorderWidth, BorderRadius, ContainerStyle, Width } from '../Utils/Style';
import { ThemeContext } from '../Components/ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Button
        title="Toggle Theme"
        textStyle={[styles.themeButtonText, { color: theme.textColor }]}
        buttonStyle={styles.themeButton}
        onPress={toggleTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: ContainerStyle.flex,
    padding: Padding.large,
    backgroundColor: Colors.background,
  },
  themeButtonText: {
    color: Colors.primary,
  },
  themeButton: {
    marginTop: 250,
    marginLeft: 30,
  },
});