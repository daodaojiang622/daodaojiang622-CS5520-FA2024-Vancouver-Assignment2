import React, { useContext} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './Screens/SettingsScreen';
import TabBarIcon from './Components/TabBarIcon';
import AddActivityScreen from './Screens/AddActivityScreen';
import ItemsList from './Components/ItemsList';
import { DataProvider } from './Components/DataContext';
import AddDietScreen from './Screens/AddDietScreen';
import { Colors, Padding, Font, Icon, ContainerStyle } from './Utils/Style';
import { ThemeProvider, ThemeContext } from './Components/ThemeContext';
import ScreenWrapper from './Components/ScreenWrapper';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ActivitiesScreenWrapper() {
  return (
    <ScreenWrapper>
      <ItemsList type='activity'/>
    </ScreenWrapper>
  );
}

function DietScreenWrapper() {
  return (
    <ScreenWrapper>
      <ItemsList type='diet'/>
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
  const { theme } = useContext(ThemeContext);

  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
          <TabBarIcon 
            routeName={route.name}
            iconStyle={{ color: focused ? Colors.secondary : Colors.tertiary}}
            />
          ),
          tabBarStyle: {
            backgroundColor: theme.headerColor,
          },
          headerStyle: {
            backgroundColor: theme.headerColor,
          },
          tabBarActiveTintColor: Colors.secondary,
          tabBarInactiveTintColor: Colors.tertiary,
        })}
      >
        <Tab.Screen 
          name="Activities" 
          component={ActivitiesScreenWrapper} 
          options={({ navigation }) => ({ 
            headerRight: () => (
              <TouchableOpacity 
              onPress={() => 
                navigation.navigate('AddActivity')} 
              style={styles.addIconContainer}
              >
              <Icon.addIconComponent
                name={Icon.addIconName}
                style={styles.addIcon}
              />
              <Icon.activityIconComponent
                name={Icon.activityIconName}
                style={styles.addIcon}
              />
            </TouchableOpacity>
            ),
            headerTintColor: Colors.tertiary,
          })}  
        />
        <Tab.Screen 
          name="Diet" 
          component={DietScreenWrapper} 
          options={({ navigation }) => ({ 
            headerRight: () => (
              <TouchableOpacity 
              onPress={() => 
                navigation.navigate('AddDiet')} 
              style={styles.addIconContainer}
              >
              <Icon.addIconComponent
                name={Icon.addIconName}
                style={styles.addIcon}
              />
              <Icon.dietIconComponent
                name={Icon.dietIconName}
                style={styles.addIcon}
              />
            </TouchableOpacity>
            ),
            headerTintColor: Colors.tertiary,
          })}  
          />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreenWrapper} 
          options={{
            headerTintColor: Colors.tertiary,
          }}
        />
      </Tab.Navigator>
  );
}
export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.headerColor,
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
              headerTintColor: Colors.tertiary,
            }}
          />
          <Stack.Screen 
            name="AddDiet" 
            component={AddDietScreen} 
            options={{ 
              title: 'Add A Diet', 
              headerTintColor: Colors.tertiary,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    color: Colors.tertiary,
    fontSize: Font.sizeMedium,
  },
  addIconContainer: {
    flexDirection: ContainerStyle.flexDirection,
    paddingRight: Padding.xxlarge,
  },
});