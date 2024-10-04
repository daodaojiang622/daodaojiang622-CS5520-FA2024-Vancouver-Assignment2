# Define default shell for executing commands
SHELL := /bin/bash

# Variables
NPM := npm
EXPO := expo

# Check if node_modules exists, otherwise run npm install
node_modules:
	$(NPM) install

# Install dependencies for React Navigation, Ionicons, etc.
install: node_modules
	$(NPM) install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @expo/vector-icons react-native-screens react-native-safe-area-context
	$(EXPO) install react-native-screens react-native-safe-area-context

# Start the development server, depends on node_modules
start: node_modules
	$(EXPO) start

# Clean node_modules and reinstall
clean:
	rm -rf node_modules
	$(NPM) install

# Reinstall project dependencies (clean + install)
reinstall: clean install

# Run project on iOS
ios: node_modules
	$(EXPO) run:ios

# Run project on Android
android: node_modules
	$(EXPO) run:android
