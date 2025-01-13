// app/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen'
import BookingsListScreen from './screens/BookingsListScreen';
import ProfileScreen from './screens/ProfileScreen';
import TrackingScreen from './screens/TrackingScreen';
// import BookingScreen from './screens/BookingScreen';
// import BookingScreen from './screens/BookingScreen'; // Create this screen
// import BookingsListScreen from './screens/BookingsListScreen'; // Create this screen
// import ProfileScreen from './screens/ProfileScreen'; // Create this screen
// import TrackingScreen from './screens/TrackingScreen'; // Create this screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Booking" 
          component={BookingScreen} 
          options={{ title: 'Book Transportation' }} 
        />
        <Stack.Screen 
          name="BookingsList" 
          component={BookingsListScreen} 
          options={{ title: 'My Bookings' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile' }} 
        />
        <Stack.Screen 
          name="Tracking" 
          component={TrackingScreen} 
          options={{ title: 'Real-time Tracking' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;