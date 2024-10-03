import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivitiesScreen from './Screens/ActivitiesScreen';
import DietScreen from './Screens/DietScreen';
import SettingsScreen from './Screens/SettingsScreen';
import TabBarIcon from './Components/TabBarIcon';
import Colors from './Utils/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenWrapper({ children }) {
  return <View style={styles.screenContainer}>{children}</View>;
}

function ActivitiesScreenWrapper() {
  return (
    <ScreenWrapper>
      <ActivitiesScreen />
    </ScreenWrapper>
  );
}

function DietScreenWrapper() {
  return (
    <ScreenWrapper>
      <DietScreen />
    </ScreenWrapper>
  );
}

function SettingsScreenWrapper() {
  return (
    <ScreenWrapper>
      <SettingsScreen />
    </ScreenWrapper>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => <TabBarIcon routeName={route.name} />,
        tabBarStyle: {
          backgroundColor: Colors.background,
        },
        headerStyle: {
          backgroundColor: Colors.background,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#ccc',
      })}
    >
      <Tab.Screen name="Activities" component={ActivitiesScreenWrapper} />
      <Tab.Screen name="Diet" component={DietScreenWrapper} />
      <Tab.Screen name="Settings" component={SettingsScreenWrapper} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#cf6d38', // Set the header background color here
          },
          headerTintColor: '#fff', // Set the header text color
        }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background, // Set the background color to #bf6332
  },
});