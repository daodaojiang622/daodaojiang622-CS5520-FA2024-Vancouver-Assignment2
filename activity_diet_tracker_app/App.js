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
import ItemsList from './Components/ItemsList';
import { DataProvider } from './Components/DataContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenWrapper({ children }) {
  return <View style={styles.screenContainer}>{children}</View>;
}

function ActivitiesScreenWrapper({ navigation }) {
  const handleAddPressActScreen = () => {
    navigation.navigate('AddAnActivity');
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
              <Button 
                title="Add" 
                textStyle={styles.addButtonText} 
                onPress={() => navigation.navigate('AddAnActivity')} 
              />
            ),
            headerTintColor: 'white',
            backgroundColor: '#a6a6bf',
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
        initialRouteName="BottomTabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#454580', 
          },
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
});