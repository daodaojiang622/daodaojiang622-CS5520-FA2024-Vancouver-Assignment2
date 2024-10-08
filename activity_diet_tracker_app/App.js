import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './Screens/SettingsScreen';
import TabBarIcon from './Components/TabBarIcon';
import AddActivityScreen from './Screens/AddActivityScreen';
import ItemsList from './Components/ItemsList';
import { DataProvider } from './Components/DataContext';
import { MaterialIcons } from '@expo/vector-icons';
import AddDietScreen from './Screens/AddDietScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenWrapper({ children }) {
  return <View style={styles.screenContainer}>{children}</View>;
}

function ActivitiesScreenWrapper({ navigation }) {
  const handleAddPressActScreen = () => {
    navigation.navigate('AddActivity');
  };

  return <ItemsList type='activity'/>;
}

function DietScreenWrapper() {
  return <ItemsList type='diet'/>;
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
    <DataProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
          <TabBarIcon 
            routeName={route.name}
            iconStyle={{ color: focused ? 'orange' : 'white' }}
            />
        
          ),
          tabBarStyle: {
            backgroundColor: '#454580',
          },
          headerStyle: {
            backgroundColor: "#454580",
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
              <TouchableOpacity 
                onPress={() => navigation.navigate('AddActivity')}>
                <MaterialIcons 
                  name="add-circle-outline" 
                  style={styles.addButton}
                />
              </TouchableOpacity>
            ),
            headerTintColor: 'white',
            backgroundColor: '#a6a6bf',
          })}  
        />
        <Tab.Screen 
          name="Diet" 
          component={DietScreenWrapper} 
          options={({ navigation }) => ({ 
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('AddDiet')}>
                <MaterialIcons 
                  name="add-circle-outline" 
                  style={styles.addButton}
                />
              </TouchableOpacity>
            ),
            headerTintColor: 'white',
            backgroundColor: '#a6a6bf',
          })}  
          />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreenWrapper} 
          options={{
            headerTintColor: 'white',
            backgroundColor: '#a6a6bf',
          }}
        />
      </Tab.Navigator>
    </DataProvider>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#454580', 
            },
          }}
        >
          <Stack.Screen 
            name="Back" 
            component={BottomTabs} 
            options={{ 
              headerShown: false 
            }}
          />
          <Stack.Screen 
            name="AddActivity" 
            component={AddActivityScreen} 
            options={{ 
              title: 'Add An Activity', 
              headerTintColor: 'white',
              backgroundColor: '#a6a6bf',
            }}
          />
          <Stack.Screen 
            name="AddDiet" 
            component={AddDietScreen} 
            options={{ 
              title: 'Add A Diet', 
              headerTintColor: 'white',
              backgroundColor: '#a6a6bf',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    zIndex: 1,
  },
  addButtonText: {
    color: 'orange',
    fontSize: 16,
    marginRight: 25,
    fontWeight: 'bold',
  },
  addButton: {
    color: 'white',
    fontSize: 25,
    marginRight: 35,
  },
});