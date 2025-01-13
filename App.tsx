// app/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import BookingsListScreen from './screens/BookingsListScreen';
import ProfileScreen from './screens/ProfileScreen';
import TrackingScreen from './screens/TrackingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Sign In' }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ title: 'Forgot Password' }} 
        />
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