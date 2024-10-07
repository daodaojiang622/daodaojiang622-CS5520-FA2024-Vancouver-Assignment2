import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivitiesScreen from './Screens/ActivitiesScreen';
import DietScreen from './Screens/DietScreen';
import SettingsScreen from './Screens/SettingsScreen';
import TabBarIcon from './Components/TabBarIcon';
import { background, icon, inactiveIcon } from './Utils/Colors';
import Button from './Components/Button';
import AddAnActivityScreen from './Screens/AddAnActivityScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenWrapper({ children }) {
  return <View style={styles.screenContainer}>{children}</View>;
}

function ActivitiesScreenWrapper({ navigation }) {
  const handleAddPressActScreen = () => {
    navigation.navigate('AddAnActivity');
  };

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
        tabBarIcon: ({ focused }) => (
        <TabBarIcon 
          routeName={route.name}
          iconStyle={{ color: focused ? 'orange' : 'white' }}
          />
      
        ),
        tabBarStyle: {
          backgroundColor: '#3f3e9e',
        },
        headerStyle: {
          backgroundColor: "#3f3e9e",
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
      })}
    >
      <Tab.Screen 
        name="Activities" 
        component={ActivitiesScreenWrapper} 
        options={({ navigation }) => ({ 
          headerRight: () => (
            <Button title="Add" textStyle={styles.addButtonText} onPress={() => navigation.navigate('AddAnActivity')} />
          ),
          headerTintColor: 'white',
        })}  
      />
      <Tab.Screen 
        name="Diet" 
        component={DietScreenWrapper} 
        options={{
          headerTintColor: 'white',
        }}
        />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreenWrapper} 
        options={{
          headerTintColor: 'white',
        }}
      />
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
            backgroundColor: '#3f3e9e', 
          },
          headerTintColor: 'white', 
        }}
      >
        <Stack.Screen 
          name="BottomTabs" 
          component={BottomTabs} 
          options={{ 
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="AddAnActivity" 
          component={AddAnActivityScreen} 
          options={{ 
            title: 'Add An Activity', 
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: background, // Set the background color to #bf6332
  },
  addButtonText: {
    color: 'orange',
    fontSize: 16,
    marginRight: 25,
    fontWeight: 'bold',
  },
});