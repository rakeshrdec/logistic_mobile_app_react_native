// app/screens/HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logistics App</Text>
      <Text style={styles.welcomeMessage}>Welcome to the Logistics Transportation App!</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Book Transportation"
          onPress={() => navigation.navigate('Booking')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Bookings"
          onPress={() => navigation.navigate('BookingsList')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Real-time Tracking"
          onPress={() => navigation.navigate('Tracking')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
});

export default HomeScreen;