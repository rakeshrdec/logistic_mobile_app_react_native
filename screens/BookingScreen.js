// app/screens/BookingScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BookingScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleBooking = () => {
    // Here you would typically call a service to create a booking
    console.log('Booking created:', { pickupLocation, dropoffLocation, vehicleType });
    // Reset form after booking
    setPickupLocation('');
    setDropoffLocation('');
    setVehicleType('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Transportation</Text>
      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Dropoff Location"
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Type"
        value={vehicleType}
        onChangeText={setVehicleType}
      />
      <Button title="Confirm Booking" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default BookingScreen;